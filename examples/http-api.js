import fastify from "fastify";
import chatGPT from "../dist/index.js";
import fs from "fs";

const app = fastify();
const dir = "./tmp/";
// In case not able to chat, get token from __Secure-next-auth.session-token in browser login,
// replace myToken below and then replace config/default-chatgpt-io.json with {} and run again,
// then revert myToken back afterwards and run node http-api.js again.
// This proxy agent is using the different conversation id on json config for different users
const myToken = "see configs/default-chatgpt-io.json";
// Initialize chatbot with a session token
console.log("start new chat");
const bot = new chatGPT(myToken);

// Wait for chatbot to be ready
bot.waitForReady().then(() => {
  console.log("Chatbot is ready!");
});

// API route for asking the chatbot a question
app.post("/ask", async (req, res) => {
  // Get question and conversation_id from body parameters
  var ts = new Date();
  console.log(ts.toLocaleString(), ", get req: ", req.body);
  const { polling, message_id, message, conversation_id, pre_sharedkey } =
    req.body;

  // a simple preshared-key
  if (pre_sharedkey != "<Your preshared key>") {
    res.status(503).send({
      error: "No Access Permission!",
    });
    return;
  }
  // Return an error if the chatbot is not yet ready
  if (!bot.ready) {
    res.status(503).send({
      error: "Chatbot is not ready yet",
    });
    return;
  }

  const fileName = dir + conversation_id + "_" + message_id;
  if (!polling) {
    console.log("send back 204");
    res.status(204).send({
      message: "Response Not ready now, please wait",
    });

    // Use conversation_id if provided, otherwise use default conversation
    let response;
    if (conversation_id) {
      response = await bot.ask(message, conversation_id);
    } else {
      response = await bot.ask(message);
    }

    ts = new Date();
    console.log(
      ts.toLocaleString(),
      ", get response: ",
      response.slice(0, 100),
      "..."
    );
    // Send response as JSON
    //res.send({
    //  response: response,
    //});

    fs.writeFile(fileName, response, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File saved: ", fileName);
        setTimeout(async () => {
          fs.unlink(fileName, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }, 2 * 60 * 1000);
      }
    });
  } else {
    try {
      const data = fs.readFileSync(fileName, "utf8");
      res.send({
        response: data,
      });
    } catch (e) {
      res.status(204).send({
        message: "Response Not ready now, please wait",
      });
      return;
    }
  }
});

const port = process.env.CHATGPT_PORT || 8080;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

app.listen({ port }, (err) => {
  if (err) {
    console.error("listen error: ", err);
    process.exit(1);
  }
  console.log(`API listening on port ${port}`);
});
