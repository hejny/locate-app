// tslint:disable-next-line: no-reference
/// <reference path="./userhome.d.ts" />

import { exec as execLegacy } from 'child_process';
import { RequireAtLeastOne } from 'type-fest';
import userhome from 'userhome';
import { promisify } from 'util';
import { ILocateAppOptions } from '../locateApp';
import { isExecutable } from '../utils/isExecutable';

const exec = promisify(execLegacy);

export async function locateAppOnMacOs({
    appName,
    macOsName,
    macOsPackageName,
    macOsExecName,
}: Pick<Required<ILocateAppOptions>,   'appName' > & Pick<RequireAtLeastOne<ILocateAppOptions>, 'macOsName' | 'macOsPackageName' | 'macOsExecName' >
    ): Promise<string> {
 if (!macOsPackageName) {
  macOsPackageName = macOsName
 }
  if (!macOsExecName) {
  macOsExecName = macOsName
  }

    const toExec = `/Contents/MacOS/${macOsExecName}`;
    const regPath = `/Applications/${macOsPackageName}.app` + toExec;
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
