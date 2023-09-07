import { locateInternetExplorer } from './locateInternetExplorer';

describe('locating the Internet Explorer browser', () => {
    it('should locate Internet Explorer browser', async () => {
        if (process.platform === 'win32') {
            await expect(locateInternetExplorer()).resolves.toMatch(
                /iexplore/i,
            );
        } else {
            await expect(() => locateInternetExplorer()).toThrowError("ie is not available on macOS");
        }

        expect.assertions(1);
    });
});
