import { ILocateAppOptions } from '../locateApp';
import { isExecutable } from '../utils/isExecutable';

export async function locateAppOnWindows({
    appName,
    windowsSuffix,
}: Pick<ILocateAppOptions, 'appName' | 'windowsSuffix'>): Promise<string> {
    const prefixes = [
        process.env.LOCALAPPDATA,
        process.env.PROGRAMFILES,
        process.env['PROGRAMFILES(X86)'],
    ];

    for (const prefix of prefixes) {
        const path = prefix + windowsSuffix;
        if (await isExecutable(path)) {
            return path;
        }
    }

    throw new Error(`Can not locate app ${appName} on Windows.`);
}
