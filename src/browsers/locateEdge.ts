import { locateApp } from '../locateApp';

export function locateEdge(): Promise<string> {
    return locateApp({
        appName: 'Edge',
        windowsSuffix: '\\Microsoft\\Edge\\Application\\msedge.exe',
        // TODO: Is there an macOS and Linux version of Edge?
    });
}
