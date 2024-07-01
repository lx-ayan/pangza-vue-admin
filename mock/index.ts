import { MockMethod, MockConfig } from 'vite-plugin-mock'
import userMock from './user';
export default [
    ...userMock
] as MockMethod[]