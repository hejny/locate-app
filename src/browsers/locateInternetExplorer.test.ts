import { locateInternetExplorer } from './locateInternetExplorer';

describe('locating the Internet Explorer browser', () => {
    it('should locate Internet Explorer browser', async () => {
        await expect(locateInternetExplorer()).resolves.toMatch(/iexplore/i);
        expect.assertions(1);
    });
});
