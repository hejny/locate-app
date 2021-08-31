import { locateSafari } from './locateSafari';

describe('locating the Safari browser', () => {
    it('should locate Safari browser', async () => {
        if (process.platform === 'darwin') {
            await expect(locateSafari()).resolves.toMatch(/safari/i);
        } else {
            await expect(locateSafari()).rejects.toThrow();
        }
        expect.assertions(1);
    });
});
