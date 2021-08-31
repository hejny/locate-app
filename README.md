# 🕵️ Locate ANY APP

Find apps installed on your system. This util will help to find executables of a known app like Chrome, Firefox,... on Windows, Linux, and macOS out of the box.


## 🔎 Locating the Chrome browser

Via this utility it is extremely easy to get the path to some browser:

```typescript
import { locateChrome } from 'locate-app';

const executablePath = await locateChrome();
```

Then you can use **executablePath to open *(spawn)* the browser:**

```typescript
import { locateChrome } from 'locate-app';
import { spawn } from 'child_process';

spawn(await locateChrome(), ['https://github.com/hejny/locate-app']);
```

*Locate app will ensure that file is executable. If it can not find the browser it will throw an error.*
Or you can use the path to the browser as you want:

```typescript
import { locateChrome } from 'locate-app';
import puppeteer from 'puppeteer-core';

await puppeteer.launch({ executablePath: await locateChrome() });
```


## 🔍 Locating arbitrary browser

You can use functions [locateChrome](https://hejny.github.io/locate-app/modules.html#locateChrome), [locateEdge](https://hejny.github.io/locate-app/modules.html#locateEdge), [locateFirefox](https://hejny.github.io/locate-app/modules.html#locateFirefox), [locateInternetExplorer](https://hejny.github.io/locate-app/modules.html#locateInternetExplorer), [locateSafari](https://hejny.github.io/locate-app/modules.html#locateSafari) or **universal [locateBrowser](https://hejny.github.io/locate-app/modules.html#locateBrowser)** which recieves param which browser to locate:

```typescript
import { locateBrowser } from 'locate-app';

const executablePath = await locateBrowser('edge');
```


## 🔎 Locating arbitrary app

You can locate any app very easily. You need to provide breadcrumbs for each platform. If you omit some platform it does not matter but there will be an error in runtime if you try to run it on the omitted os.

```typescript
import { locateApp } from 'locate-app';

await locateApp({
    appName: 'Chrome',
    linuxWhich: 'google-chrome',
    windowsSuffix: '\\Google\\Chrome\\Application\\chrome.exe',
    macOsName: 'Google Chrome',
})
```


## 🔍 Documentation

The project is fully typed so you probably do not need the documentation. But if so, here it is:
https://hejny.github.io/locate-app/index.html



