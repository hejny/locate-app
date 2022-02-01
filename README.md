# 🕵️ Locate ANY APP

<!--Badges-->

 [![Package Quality](https://packagequality.com/shield/locate-app.svg)](https://packagequality.com/#?package=locate-app)
 [![License](https://img.shields.io/github/license/hejny/locate-app.svg?style=flat)](https://raw.githubusercontent.com/hejny/locate-app/master/LICENSE)
 [![NPM Version](https://badge.fury.io/js/@hejny%2Flocate-app.svg)](https://www.npmjs.com/package/@hejny/locate-app)
 [![Known Vulnerabilities](https://snyk.io/test/github/hejny/locate-app/badge.svg)](https://snyk.io/test/github/hejny/locate-app)
 [![Issues](https://img.shields.io/github/issues/hejny/locate-app.svg?style=flat)](https://github.com/hejny/locate-app/issues)

<!--/Badges-->

[![npm version](https://badge.fury.io/js/locate-app.svg)](https://badge.fury.io/js/locate-app)

Find apps installed on your system. This util will help to find executables of a known app like Chrome, Firefox,... on Windows, Linux, and macOS out of the box.

![Social media wallpaper for Locate app project](/media/locate-app-social-wallpaper.png)

## 🔎 Locating the Firefox

Via this utility it is extremely easy to get the path to some browser:

```typescript
import { locateChrome } from 'locate-app';

const executablePathOfFirefox = await locateFirefox();
```

Then you can use **executablePathOfFirefox to open _(spawn)_ the browser:**

```typescript
import { locateChrome } from 'locate-app';
import { spawn } from 'child_process';

spawn(await locateFirefox(), ['https://github.com/hejny/locate-app']);
```

_Locate app will ensure that file is executable. If it can not find the browser it will throw an error._
Or you can use the path to the browser as you want:

## 🔍 Locating the Chrome

```typescript
import { locateChrome } from 'locate-app';

const executablePathOfChrome = await locateChrome();
```

```typescript
import { locateChrome } from 'locate-app';
import { spawn } from 'child_process';

spawn(await locateChrome(), ['https://github.com/hejny/locate-app']);
```

_Locate app will ensure that file is executable. If it can not find the browser it will throw an error._
Or you can use the path to the browser as you want:

```typescript
import { locateChrome } from 'locate-app';
import puppeteer from 'puppeteer-core';

await puppeteer.launch({ executablePath: await locateChrome() });
```

## 🔎 Locating arbitrary browser

You can use functions [locateChrome](https://hejny.github.io/locate-app/modules.html#locateChrome), [locateEdge](https://hejny.github.io/locate-app/modules.html#locateEdge), [locateFirefox](https://hejny.github.io/locate-app/modules.html#locateFirefox), [locateInternetExplorer](https://hejny.github.io/locate-app/modules.html#locateInternetExplorer), [locateSafari](https://hejny.github.io/locate-app/modules.html#locateSafari) or **universal [locateBrowser](https://hejny.github.io/locate-app/modules.html#locateBrowser)** which recieves param which browser to locate:

```typescript
import { locateBrowser } from 'locate-app';

const executablePathOfSafari = await locateBrowser('safari');
const executablePathOfEdge = await locateBrowser('edge');
```

## 🔍 Locating arbitrary app

You can locate any app very easily. You need to provide breadcrumbs for each platform. If you omit some platform it does not matter but there will be an error in runtime if you try to run it on the omitted os.

```typescript
import { locateApp } from 'locate-app';

await locateApp({
    appName: 'Chrome',
    linuxWhich: 'google-chrome',
    windowsSuffix: '\\Google\\Chrome\\Application\\chrome.exe',
    macOsName: 'Google Chrome',
});
```

## 📖 Documentation

The project is fully typed so you probably do not need the documentation. But if so, here it is
https://hejny.github.io/locate-app/index.html


## 🖋️ Contributing

I am opened to pull requests, feedback and suggestions. Or if you like this utility, you can [☕ buy me a coffee](https://www.buymeacoffee.com/hejny) or [donate via cryptocurrencies](https://github.com/hejny/hejny/blob/main/documents/crypto.md)


## ✨ Partners


<a href="https://Collboard.com/">
    <img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.12.1/logo-small.png" alt="Collboard logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://czech.events/">
    <img src="https://czech.events/design/logos/czech.events.transparent-logo.png" alt="Czech.events logo" width="50" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://sigmastamp.ml/">
    <img src="https://www.sigmastamp.ml/sigmastamp-logo.white.svg" alt="SigmaStamp logo" width="50"/>
</a>


[Become a partner](https://www.pavolhejny.com/contact/)

