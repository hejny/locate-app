import { locateApp } from '../locateApp';

export function locateVscode(): Promise<string> {
    return locateApp({
        appName: 'Firefox',
        linuxWhich: 'firefox',
        windowsSuffix: '\\Mozilla Firefox\\firefox.exe',
        macOsName: 'Firefox',
    });
}
