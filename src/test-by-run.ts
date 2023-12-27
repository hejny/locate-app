import { locateVscode } from './main';

test();

async function test() {
    // TODO: Return path not name> console.info('Default browser: ', await locateDefaultSystemBrowser());
    // console.info('Firefox: ', await locateFirefox());
    // console.info('Chrome: ', await locateChrome());
    console.info('VSCode: ', await locateVscode());
}
