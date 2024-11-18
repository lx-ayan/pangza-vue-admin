import { viteMockServe } from 'vite-plugin-mock';

function setupMockPlugin(isBuild: boolean) {
    return viteMockServe({
        mockPath: 'mock',
        enable: !isBuild,
        logger: true
    });
}

export default setupMockPlugin;