import { locateApp } from '../locateApp';

export function locateEdge(): Promise<string> {
    return locateApp({
        appName: 'Edge',
        windowsSuffix: '\\Microsoft\\Edge\\Application\\msedge.exe',
        linuxWhich: 'microsoft-edge',
         macOsName: 'Microsoft Edge',
    });
}
