import { locateBrowser } from '../browsers/locateBrowser';
import { getAppName } from './getAppName';

describe('getting browser name', () => {
    it('should get name of Chrome', async () => {
        await expect(getAppName(await locateBrowser('chrome'))).resolves.toBe(
            'Chrome',
        );
        expect.assertions(1);
    });

    it('should get name of Firefox', async () => {
        await expect(getAppName(await locateBrowser('firefox'))).resolves.toBe(
            'Firefox',
        );
        expect.assertions(1);
    });

    it('should get name of Safari', async () => {
        if (process.platform === 'darwin') {
            await expect(
                getAppName(await locateBrowser('safari')),
            ).resolves.toBe('Safari');

            expect.assertions(1);
        }
    });

    it('should get name of Edge', async () => {
        if (process.platform === 'win32') {
            await expect(getAppName(await locateBrowser('edge'))).resolves.toBe(
                'Edge',
            );
            await expect(
                getAppName(await locateBrowser('msedge')),
            ).resolves.toBe('Edge');

            expect.assertions(2);
        }
    });

    it('should get name of Internet Explorer', async () => {
        if (process.platform === 'win32') {
            await expect(getAppName(await locateBrowser('ie'))).resolves.toBe(
                'Internet Explorer',
            );
            await expect(getAppName(await locateBrowser('msie'))).resolves.toBe(
                'Internet Explorer',
            );

            expect.assertions(2);
        }
    });
});
