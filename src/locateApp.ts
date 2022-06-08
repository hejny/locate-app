import { RequireAtLeastOne } from 'type-fest';
import { locateAppOnLinux } from './platforms/locateAppOnLinux';
import { locateAppOnMacOs } from './platforms/locateAppOnMacOs';
import { locateAppOnWindows } from './platforms/locateAppOnWindows';

export interface ILocateAppOptions {
    appName: string;
    linuxWhich: string;
    windowsSuffix: string;
    macOsName: string;
}

export function locateApp({
    appName,
    linuxWhich,
    windowsSuffix,
    macOsName,
}: RequireAtLeastOne<
    ILocateAppOptions,
    'linuxWhich' | 'windowsSuffix' | 'macOsName'
>): Promise<string> {
    if (process.platform === 'win32') {
        if (windowsSuffix) {
            return locateAppOnWindows({ appName, windowsSuffix });
        } else {
            throw new Error(`${appName} is not available on Windows.`);
        }
    } else if (process.platform === 'darwin') {
        if (macOsName) {
            return locateAppOnMacOs({ appName, macOsName });
        } else {
            throw new Error(`${appName} is not available on macOS.`);
        }
    } else {
        if (linuxWhich) {
            return locateAppOnLinux({ appName, linuxWhich });
        } else {
            throw new Error(`${appName} is not available on Linux.`);
        }
    }
}
