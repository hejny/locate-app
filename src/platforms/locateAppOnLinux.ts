import { exec as execLegacy } from 'child_process';
import { promisify } from 'util';
import { ILocateAppOptions } from '../locateApp';

export const exec = promisify(execLegacy);

export async function locateAppOnLinux({
    appName,
    linuxWhich,
}: Pick<ILocateAppOptions, 'appName' | 'linuxWhich'>): Promise<string> {
    const { stderr, stdout } = await exec(`which ${linuxWhich}`);

    if (!stderr && stdout) {
        return stdout.trim();
    }

    throw new Error(`Can not locate app ${appName} on Linux.\n ${stderr}`);
}
