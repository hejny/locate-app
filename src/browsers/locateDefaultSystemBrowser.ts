/**
 *
 * @param browser It can be "default", "chrome", "firefox", "safari", "ie", "msie", "edge" or "msedge" or executable path to the browser
 * @returns executable path to browser
 */
export async function locateDefaultSystemBrowser(): Promise<string> {
    return 'chrome';
    // TODO: Get default system browser DO not expect chrome
}
