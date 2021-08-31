import { locateEdge } from './locateEdge';

describe('locating the Edge browser', () => {
    it('should locate Edge browser', async () => {
        await expect(locateEdge()).resolves.toMatch(/msedge/i);
        expect.assertions(1);
    });
});
