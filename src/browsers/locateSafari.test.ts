import { locateSafari } from './locateSafari';

describe('locating the Safari browser', () => {
    it('should locate Safari browser', async () => {
        await expect(locateSafari()).resolves.toMatch(/safari/i);
        expect.assertions(1);
    });
});
