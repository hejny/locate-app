import { locateBrowser } from './locateBrowser';

describe('locating the browser', () => {
    it('should locate Chrome', async () => {
        await expect(locateBrowser('chrome')).resolves.toMatch(/chrome/i);
        expect.assertions(1);
    });

    it('should locate Firefox', async () => {
        await expect(locateBrowser('firefox')).resolves.toMatch(/firefox/i);
        expect.assertions(1);
    });

    it('should locate Safari', async () => {
        await expect(locateBrowser('safari')).resolves.toMatch(/safari/i);
        expect.assertions(1);
    });

    it('should locate Edge', async () => {
        await expect(locateBrowser('edge')).resolves.toMatch(/msedge/i);
        await expect(locateBrowser('edge')).resolves.toMatch(/msedge/i);
        expect.assertions(2);
    });

    it('should locate Internet Explorer', async () => {
        await expect(locateBrowser('ie')).resolves.toMatch(/iexplore/i);
        await expect(locateBrowser('msie')).resolves.toMatch(/iexplore/i);
        expect.assertions(2);
    });

    it('should fail when passing invalid entries', async () => {
        await expect(locateBrowser('chromex')).rejects.toThrow();
        await expect(locateBrowser('dfsagrg/efsdfsdf')).rejects.toThrow();
        await expect(
            locateBrowser('https://jestjs.io/docs/expect'),
        ).rejects.toThrow();
        expect.assertions(3);
    });
});
