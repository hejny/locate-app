import { locateApp } from '../locateApp';

export function locateChrome(): Promise<string> {
    return locateApp({
        appName: 'Chrome',
        linuxWhich: 'google-chrome',
        windowsSuffix: '\\Google\\Chrome\\Application\\chrome.exe',
        macOsName: 'Google Chrome',
    });
}
