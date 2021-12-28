# 🕵️ Locate ANY APP

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
