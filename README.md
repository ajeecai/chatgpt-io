## ajeecai version

The file `http-api.js` in example is deleted in original repository, but I need it for a quick proxy server for chatgpt, so get it back with some modification.

To run, `node http-api.js`. In case not able to chat, get token from __Secure-next-auth.session-token in browser login, replace myToken below and then replace config/default-chatgpt-io.json with {} and run again, then revert myToken back afterwards and run `node http-api.js` again.

This proxy agent is using the different conversation id on json config for different users

## For support join [[Discord](https://discord.pawan.krd)]

# chatgpt-io - Unofficial API client for ChatGPT [[Discord](https://discord.pawan.krd)]

[![NPM](https://img.shields.io/npm/v/chatgpt-io.svg?label=NPM&logo=npm&color=CB3837)](https://www.npmjs.com/package/chatgpt-io)
[![NPM](https://img.shields.io/npm/dm/chatgpt-io?label=Downloads&color=CB3837&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKoSURBVEiJ7ZZLTBNRFIb%2FedDS6UNKVQgZAkJTlJdACoZgGhKj0QSNwUVxIbrRhSaasCJh58atcaExkYXogoRISF2UxJVReYkWK6gTB9KK1bZjBQlMNcz0ujAlJe3QamSl%2F%2B7m3PP995w592aAbRaVy6bqanujycZeSa4TKlGXo2qvKIpStlw2FwOdjnG5zvFnS%2BuMAIDJoci3icHoLQB%2FxwAATDYWBSX5AADOwiZyzaNz3fin%2Bm%2FwDxhojSlTW19xgaXz9ACgqIpr05WkQOWb6dMNDVUHAUBJrP%2BY9S%2FcBpA2vpo3udHpeNx0sqiNrzExFEVQWm8Gq%2FtVsLysIPxeBgB8nFtVfZ7o2MspwZWJo9kiKSwf9Xujs9YSHfY4d2zAAYArYFHRbEEhr4ffK71VgsvHtDiMVmBlZUXRMeaRRd9qZ%2B0RmzXVAAASCsHA5XcLkWC8XQiFlrQ4W37kQCAQlhbXOwd7hVBCIZvg%2FlFpms6nnYFAILwVQ7OCpGKxWMRssIhRUT60r73QCACeawuSbyTWN%2FXkzYts%2BRtTVNfc9ojhOCtREsxaJHhRFMXxZMzvEz163V7H0%2Fuf%2BmhC6KBv7cbMjDCUCrLb7a3GorKbFEurqiwvvX7%2B7PAmp5YO93yPQEhXv5c4yivdmU7jbK0acLY57maKOcor3V39XtIjENLS4Z5PqyApmmHA6jkuE2R6XOjW6ARYPcfRTHrH0wxsNU5wFfarDcXFl7RgmZRnMO0urG3ewiChqgCQZ7HCdX2YB8D%2FjkGqiKqoaQbxr1%2BmPowO8Tv3HzCAYcDtKoEcDQGEgCviEZc%2Bg6hKVrj0aiL%2BfSk2mVynPhV0dVPLeZ3B2ApCkcoTZ4bnHw6cAoCy490Pgp57naBI1p%2BE9TV5bG5m8g4yvEvbop%2BZL%2FJtWVlNhAAAAABJRU5ErkJggg%3D%3D)](https://www.npmjs.com/package/chatgpt-io)
[![GitHub issues](https://img.shields.io/github/issues/PawanOsman/chatgpt-io?label=Issues&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVEiJtVRrbBRVFP7mzt153Nnd7i67dLfvdt1uW7ZUaLtBIVBjYjQBLGI1YviBGjX4Q6iJBiiiJmpIlKSJkGhUiCYGY4yJ4QcmJqhQomgLFZIWY2iFYAiPwm7Z99y5/ugrtbt0S/Qkk8ycc77vO+eeMxf4n01eQK7mstmeViS5JSOs8wDM/7IQqUpnxw80tWYPNC3P1OjGTwCkYoBFdeDVtOdfqgxu7jMvsws8Jq91VXrO3Y6NJTjvnw9LiuB3LJaVXXV25ly6ZhzNa+IIOpjDS9WdAEqKKfCOVqmxg18tu99cHWTi9m9EJPuJWB1k4pvlK80aZhyaDz/fETWucHnesjHufOzF62gOA5QCLi/HmQEbSaYRuJBMfAfg6l1VX6sbvxyLdoj1bZqwzpFZz4aoLo5FO0SYGYN3Re5WlKd21DXe7LrHJ4aOEHH1OBGRel1EQrq4doKIoSNEdIW8oqcimA5r7JlCPIWGzHxUfafd7XLVtsURrgHODAsYRhCGPYjTQwLhGqC2LY5lDrvqkOn7AFjRApWqvvfN0JLy3pu/Y+e23ERHJRKANCDSk+9Az3YTvek/0O3xu9oN54fFCtTVGvaNf1kx23NbMnDaJ5xlPkChHJyn4HVN+OwMeHZzDqPGOHyy7XEAdfMKVGnGwT3BpsAPZBSbOq1pf8AH1Ncy5MwMvO6Z/CcflPEju4btHr/Waji/vaOAU5YfeXRxWeTT2DDe3Z2B9K/L4NTgZVjchKFPOgQgTIK3t8r4TL+IB5izsUJRNhYSUBYp2v6HfaUed2MMLQ1zz44SC5TOdMUzBBDAkhoCI5TCKsMgi6j6EQB1jkC5xvbsDjYF9t0axBuvZueyA2iuz6E5lJv+thIz/+nrWyh6lRFs8/g9raxk35R/KqO8ye7Y3+A23Es7r2BVu8gr4PdytEc4KkoBK03Ak3Q6pqsSMrCQGNVwMWFGRrKpQwDGJQCo0tjRTyLtD+1NnpKOHs6A5Nmt8QTQ+sTEqvcfTkFN2SCs2UOyBLDulRxei4ex49qlXwcS8aisUdqx1ud/eVi6bnT33EJlIG/xUGxA34CEMp+FrvsIBJ9bhSQBoSoJX5xOojpn91+ycidJKVU/2FRW7eVVN7CiJT/5FPjL97L4fJeAMAvf8tFGAl6dwDqHS66W1Y+pndKSk8kruEGAF7q1wgpCQMgmhMQB8FmhDSsp/vzbwtmRiQ0biwM/0zHYiOShKW6eULPq+q08yqSxfMSAyKQhEklA5B++/TzBvUKgYTIuhMDZbEpkrWSfBEDWZbkzoGjRfGCVEJtTokbh1vLbcCr+fYzzrxeKW7D9Az4tT6FlbcIZAAAAAElFTkSuQmCC)](https://github.com/PawanOsman/ChatGPT.Net/issues)
[![GitHub forks](https://img.shields.io/github/forks/PawanOsman/chatgpt-io?label=Forks&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ7SURBVEiJtZVZaFxVGMf/d19mbnMzk5lskzShmSS0Seto0xgliEFwaWmTPlhFiFIKpSLik1CLKGgVfPKhIj4oVSiVUI1GQytYrKYWbYpQa0vTdJLQmjQzk7mzpJnc9VwfpgmTmEmi0P/LvZxv+Z3vfGcB7rOogv8NNMe9yHN8BAC9MEiI6xBiT9im+Q2AK/8XUMkL4oWqusYayeNlljuZhu4mY5Mzc7OZG5ah9wBI/CcAL0j99c2te/4eu56wDCMBCqTAhwUotTRQKav+gDJ+/c9x09DbAKTWXYYgSjfCLdtdnuc/KDYRhuH2ezeo8fDWHTYniEPrzZ1fa4qiCXFACClWuus41mfG/Nxb2WQsq5aVtzAMswcAFEXpDoVCd4LB4G0A4ZUBBeIFYZAXpVGGYXYtt1mW9XFqJj5eVl6tMix3FABkWe46fOTNiu6evT5VVfsA1K8GEDleioRbHmrgOL53OYATxQO2bValZqYzguTxAahYsFEUjfaHOx7w+/0HVgMsblvXXbKFwXHcIUUp+VCSPUImmZhT/UEfgEcLfSRJAsUwwmqAYqqgaPZ9uISpra0RLVP38qIksCzbsFYguzBzx7EXB3lBggu3A6BfBogNAI5tXkxr6QHFI7+hlqhBhmVBMVz5egAK7Zrl5O4EKnzMwfRczpfLTKNpW3v1bFr7yHXzR2L69njc0HO74/H4MEAN+QAGS2+ClQF1VeInn77dJHe1qwBQldMJDr4bdc5d1gyXlq17fq7rEhsAmZ+f/10QpSiA5rWSL1QQ6WpXKQT2AXwl5NhxfPEOzTz5yk1Zpyvh8/lBCMEvqQRtGvoTAEzHdpRMMgHiWBt1XV8TkJcVz3+JCYoCvnyvDk3dwy7nKTcF0UPUQAXnLQ2cKoidrwjVP5XV4rn1AdI/LTH4Slhc+LyVev5wVNCyWQAAt0IChrL5NQHXojkc64shpxP07vSja4cKAAjXSrh0ouVfQad/TeHkaQ2yRCGmeVZtNGvbLv/0q1FI/jBohsHPR8dxqGcOr79UvWLAkWO3cPJHE2LpRjiOjfTUCLZ35S/WQDAIjmFeqK4OdQOAZZl3KFX13Krf0lHTs/sZKF4v+r7+DlMjQxjpb4XALz2H2bsOWvddRe3mx/Bszy4kkhoGBs9AT0+js7Nzrv+rU1lRlBZ7YlnmNGuYFFWiqni88xEAwKU/LmNiRMo27LyYYFnKLAQYFhFpOVjW2FCvRLbll+7sufMYuzqZ+X7g2yvJZHIvlj1GrOOQVErTQoM/nIWieDEaHYeWzMwa80YzABtLJYlyauzayE3l/G/DSCQ1zM5mYZjm6Gw201mkDVy7JHunNm150A23trnektI4x4n7izWNE4TXNqhlicatbe6mzREiSvIkgNZi/gs7IMSyfC9N04pp6icA/FUs4J4ivCA8RxxHs237OIDYGv73T/8AEAmYFH31lroAAAAASUVORK5CYII=)](https://github.com/PawanOsman/ChatGPT.Net/network)
[![GitHub stars](https://img.shields.io/github/stars/PawanOsman/chatgpt-io?label=Starts&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPYSURBVEiJrZZdaFtlGMf/7/lKs6StadIm/UhOk9jFFvuxrdt0tEJjM0Sdil6oFwqKeCG72Xbj5lgR2cVAmSCCMEGcMtCbga7Fbc0KOkGkDETXbf1YsmZt0jZJm+yctuck57xedKZp2qQB91yd9/n68Rz+z3sOoZSiHHM6Dxh5Q8VbWY1k6qyp70dHRzPl1HFldQfQUCcMH/DK+ySV0FtR0yEAr5ZTx5STJHoDPW5rZu/Z12LcuTejfJVBe6HR4/c9MkCTNfPVEX+C/+98xJ8UWuzZrx8JwOXt666spA37u7WcL9Aqo4Kj+5ubA63/G2Ctxqcn3pMtcBmBhoqc/5g/wYv1yrZTlAT4fP2v2Kpp1zN71DWH3QDYBABAoE2GWdD37e7se6NUD0IphdP5XA1ls50g1NfcyPQSoGMpnbV1+TT+y+Mpa5U5T8o6Be5IwKoOSWFwarBO+228QnnnWWnkg5ceXDj5bc30d8PmpK7TVCQSnCEub9/7Dit3tnevSXhc3MF5RSPcjVmIlhvgi4l4WVuDbGGRJI/4Kqd/dLFWCS3wn5P2jn7p2oVWk82S101LAis3Sk0OjEuArBUNyyqDp840rzA8h9nbU6sF4TK22yqUDAdv74BBoGPM3BJ98djpkPTnX/J6lJQuBgBY+KKhy2MmfDJkS84tsC8z96eGx6NRvevwQCh9fVQqH8AQgN8swl9umnDy57r4wiJ9MhIJzjAAMD0dnLof1zqOng4vjvyRXgOQMq4pgWw4Dv1jxqlLtfPxRdIeDv8aBfL2YPZu8F50Vmv/8My95GRYAVhrGYD1CcIJHh8P1can0xXtodBILDdofn4kEpyZmdPevngloYNvAARPaUB2XQyDN800IZHDscnL8/kpW2wysxxbUCh41/YAVc89pldYoqrs5m6FDl5Au89jZsE7AS1RNqDNocDtyAS2BYj1TH+L2wiY/QDvAUgROT7IbliXVocCnqU92wK0LHa1iAaAqwH0FGBoy8UUlUBaeaicuLqhzlObQUpmmgr7bdJiWqa2xvpKQJl4mFGLyVknBr5IL43d5VIsSxWLmToGDqpVPd71zzLHUFQbNd7t7nssFBpZ2hLQ0vK8wVxJGAIFWPoBs/MZfHZuRv99VI3H4vy74alrgwAgiv49J36yn7dXZncePxjndrvWrhqzkVKVEDuAHIAU/lV07uofO+Sv3qlpFFevS7K0rB+9c6v3G0oHdBRYU3P/0x575ryrJiM2WLK48rcpnpLgCYVGVosCRLHXojHC6yCQjazhx4mJIaWwcaG5vH3dlLJPcFS7lP96AOBfSCCA1HW3a3EAAAAASUVORK5CYII=)](https://github.com/PawanOsman/ChatGPT.Net/stargazers)
[![GitHub license](https://img.shields.io/github/license/PawanOsman/chatgpt-io?label=License&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQrSURBVEiJpZVvbFNVGMZ/t/e2ZW2XDUZvhwLt1rUyYOA2FJNFiRsYjREGBlCmJgiOPzKDET4gBqaSoEGREOOiY5kRI2QxETUyAigxCskQmQaSwcKEjsJYN7uO/W3Xe48fll3ZGCvom5zkzXnu+/zuveec90gMD8scn78uApPtDrvGGCFJkmQdl2QzyYoZIbSBaPTImd/qnh2rxpLv9V0q8k8T39UeFd0DIuHojAkR7B0cS54riQL3jTRVhszzMrPOr3/4EW8w0mGIf9TXU1VZiaaN/jGqy0XZm9uRZRnVlW4CUoDrIwGWfG9WQ9ncgsxC/wNU150yxE8rKigsXsX4NOeogK8qP6Cp8QL+7Bl3/C1Knt//g97Xn3k62MzpYDNnWq7xfPZ0AJxOJ8e+/ZLX33qfg59/Qke4fVhx08VzpKSOv6M5gNKnmD01P9YaE86JThzJyQC8vWMHV5ubmTI5iXWrS+jr7xtW7EjejDklbWyAySSLjIzMUUVJkpjqdgOQPmnSbbomoCs+mPunz9CBjpHPmMbE30NkT88RgDRyfmgX0REOU11VmdCoaMETzH4wF4DAlctU7/uYQNNFVDlgnffQ/Zd6+uPHtLh+ob6hbSugGQBHcjKPF81PCHC7PUa+ecOLbFnlxbPIizs9B60rbDvf2L7o0InAwp7egVBjILLbAJjNZnLz8hMChqJi7y5m+2zMmuZi0ztHuNYSQdN0li9ws+mlHOnwyeC21FTbCQMQam3ljY1lCY1Xl65Fdbn4/ZcaDux5iqVrDrKy0EW+z4MuBNv2nUVNs/H9nvkpT756tNYAqC4X+w/U3NXbd0YiIFno6okhBgbI9w2eBZMksXmZm61fNFCQOwmrRQ4ZgPa2NvZ+9GFC82eKF+PxZCDLErJJIq7pw3RNEyiyCUWR0AUWAzAhLY2Vr5QmBKiqixst1+nu7sVqUUidkMzxsyHm56nEBnTK9//F2pI5hDujaJpmNwAmk4nxCY49gNVqxZvlo3jFRsreraZi50LKd//EwT3n0HWddUtnkZs9kcLS2vb6hrZ50oyZsxrr6v/0hVpb2VG+LSFg+YoSCh59bDBfVEjpYhWX087cmSp94RAn61uo/fWa+OZEYO3lYOdnBiCh8yhxozXE8oVF5KT3cjMG4Ug/CiJ2+sLf793sjpUDQklkMlY4VRWPewpblgi6++KkOsxUHb4SPX6m5WdAwC2tItLRQXVVJUIIw8But7Nm/Ya7gplMEop8e2szADa7nbz8Oej6v9vO7nAkNJYVCztrLnEjmqY3njsVmOqyOYH4kP6/1kATcL6xievBqwgtHl329IIMoAA4NARRYrGoFo/HUZT/thzuTC/uTC+vvfyCxGC7/vpWXenq6d4+Nzdn17ikJOu9GEuSJFmsNrusyIoQQotFo7WMuPAB/gHPaKaziaM8GAAAAABJRU5ErkJggg==)](https://github.com/PawanOsman/ChatGPT.Net)
[![Discord server](https://img.shields.io/discord/1055397662976905229?color=5865F2&label=Discord&logo=discord&logoColor=white)](https://discord.pawan.krd)

A simple Node.js module for interacting with the ChatGPT without using any **~~Browser~~**.

```javascript
import chatGPT from "chatgpt-io";

let bot = new chatGPT("<SESSION_TOKEN>");
let response = await bot.ask("Hello?");
console.log(response);

```

## How the new method working without a browser?

The new method operates without a browser by utilizing a server that has implemented bypass methods to function as a proxy. The library sends requests to the server, which then redirects the request to ChatGPT while bypassing Cloudflare and other bot detection measures. The server then returns the ChatGPT response, ensuring that the method remains effective even if ChatGPT implements changes to prevent bot usage. Our servers are continuously updated to maintain their bypass capabilities.

## Installation

To install the package, run the following command:

```bash
npm install chatgpt-io
```

## Usage

To use the package, require it in your code and create a new instance of the `chatGPT` class, passing in your ChatGPT API session token as an argument.

```javascript
import chatGPT from "chatgpt-io";

let bot = new chatGPT("<SESSION_TOKEN>");

// or if your accounts is pro
let bot = new chatGPT("<SESSION_TOKEN>", {
    proAccount: true
});
```

Before making any requests to the API, you should wait for the `bot` instance to be ready by calling the `waitForReady` method. This ensures that the connection to the API has been established and any necessary setup has been completed.

```javascript
await bot.waitForReady();
```

Once the `bot` instance is ready, you can send a message to the API using the `ask` method. This method takes a message string as its first argument and an optional conversation ID as its second argument. If a conversation ID is not provided, the default conversation will be used.

```javascript
let response = await bot.ask("Hello?");
console.log(response);

let response2 = await bot.ask("Hello?", "any-unique-string");
console.log(response2);
```

The `ask` method returns a promise that resolves with the API's response to the message.

## ES6 Update

This library is now using ES6 syntax and is intended to be used with the "module" type in your package.json file. This means that you will need to update your package.json file to include the following:

```json
{
  "type": "module"
}
```

In addition, you will need to change any instances of "require" to "import" in your code. For example, instead of:

```javascript
const chatGPT = require("chatgpt-io");
```

You will now use:

```javascript
import chatGPT from "chatgpt-io";
```

## API Reference

### `ChatGPT` class

#### `constructor(sessionToken: string, options: object)`

Creates a new instance of the `ChatGPT` class.

##### Parameters

- `sessionToken` (string): Your ChatGPT API session token.
- `options` (object):

```javascript
options = {
  name: string; // default = "default"
  reconnection: boolean; // default = true
  forceNew: boolean; // default = false
  logLevel: LogLevel; // default = Info
  bypassNode: string; // default = "https://gpt.pawan.krd"
  proAccount: boolean; // default = false
}
```
```javascript
LogLevel = {
  Trace = 0,
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4
}
```


#### `waitForReady(): Promise<void>`

Waits for the `chatGPT` instance to be ready to make requests to the API. Returns a promise that resolves when the instance is ready.

#### `ask(message: string, conversationId?: string): Promise<string>`

Sends a message to the API and returns a promise that resolves with the API's response.

##### Parameters

- `message` (string): The message to send to the API.
- `conversationId` (string, optional): The ID of the conversation to send the message to. If not provided, the default conversation will be used.

## Example

Here is an example of how to use the `chatgpt-io` module to send a message to the API and log the response:

```javascript
import chatGPT from "chatgpt-io";

(async function () {
  let bot = new chatGPT("<SESSION_TOKEN>");
  await bot.waitForReady();

  // default conversation
  let response = await bot.ask("Hello?");
  console.log(response);

  // specific conversation
  let response2 = await bot.ask("Hello?", "any-unique-string");
  console.log(response2);
})();
```

## Event example(Alpha)

```javascript
import chatGPT from "chatgpt-io";

(async function () {
  let bot = new chatGPT("<SESSION_TOKEN>");

  bot.onConnected = async () => {
    await bot.waitForReady();
    // default conversation
    let response = await bot.ask("Hello?");
    console.log(response);
  };
})();
```

## Server Example

In `examples/server.js` you can find an example of how to use the `chatgpt-io` module to create a simple Fastify server that can be used to send messages to ChatGPT.

Run the server by setting the `CHATGPT_SESSION_TOKEN` environment variable to your ChatGPT API session token and running the following command:

```bash
node examples/server.js
```

You can also set the port with the `CHATGPT_PORT` environment variable. The default port is `3000`.

To send a message to the server, make a `POST` request to `http://localhost:<port>/ask` with the following JSON body:

```json
{
  "message": "Hello?",
  "conversation_id": "any-unique-string"
}
```

A standalone version of this API server can be found at [chatgpt-io-api](https://github.com/waylaidwanderer/chatgpt-io-api).
