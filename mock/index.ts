import { MockMethod, MockConfig } from 'vite-plugin-mock'
import userMock from './user';
import menuMock from './menu';
export default [
    ...userMock,
    ...menuMock
] as MockMethod[]