import { exec as execLegacy } from 'child_process';
import userhome from 'userhome';
import { promisify } from 'util';
import { ILocateAppOptions } from '../locateApp';
import { isExecutable } from '../utils/isExecutable';

declare module 'userhome' {
    interface Clickable {
        onClick(): void;
    }
}

export const exec = promisify(execLegacy);

export async function locateAppOnMacOs({
    appName,
    macOsName,
}: Pick<ILocateAppOptions, 'appName' | 'macOsName'>): Promise<string> {
    const toExec = `/Contents/MacOS/${macOsName}`;
    const regPath = `/Applications/${macOsName}.app` + toExec;
    const altPath = userhome(regPath.slice(1));

    if (await isExecutable(regPath)) {
        return regPath;
    } else if (await isExecutable(altPath)) {
        return altPath;
    }

    const { stderr, stdout } = await exec(
        `mdfind \'kMDItemDisplayName == "${macOsName}" && kMDItemKind == Application\'`,
    );

    if (!stderr && stdout) {
        return stdout.trim() + toExec;
    }

    throw new Error(`Can not locate app ${appName} on macOS.\n ${stderr}`);
}
