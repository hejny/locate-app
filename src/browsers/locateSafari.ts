import { locateApp } from '../locateApp';

export function locateSafari(): Promise<string> {
    return locateApp({
        appName: 'Safari',
        windowsSuffix: '\\Safari\\Safari.exe',
        macOsName: 'Safari',
    });
}
