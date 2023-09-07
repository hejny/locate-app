import { locateEdge } from './locateEdge';

describe('locating the Edge browser', () => {
    it('should locate Edge browser', async () => {
        if (process.platform === 'win32') {
            await expect(locateEdge()).resolves.toMatch(/msedge/i);
        } else {
            await expect(locateEdge()).resolves.toMatch(/edge/i);
        }
        expect.assertions(1);
    });
});
