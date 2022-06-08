import { locateVSCode } from './locateVSCode';

describe('locating the Visual Studio Code IDE', () => {
    it('should locate Visual Studio Code IDE', async () => {
        await expect(locateVSCode()).resolves.toMatch(/code/i);
        expect.assertions(1);
    });
});
