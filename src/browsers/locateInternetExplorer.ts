
import { locateApp } from '../locateApp';

export function locateInternetExplorer(): Promise<string> {
    return locateApp({
        appName: 'ie',
        windowsSuffix: '\\Internet Explorer\\iexplore.exe',
    });
}
