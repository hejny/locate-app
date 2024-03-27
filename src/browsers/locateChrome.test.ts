import { locateChrome } from './locateChrome';

describe('locating the Chrome browser', () => {
    it('should locate Chrome browser', async () => {
        await expect(locateChrome()).resolves.toMatch(/[cC]hrome/i);
        expect.assertions(1);
    });
});
