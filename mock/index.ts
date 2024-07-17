import { MockMethod } from 'vite-plugin-mock'
import userMock from './user';
import menuMock from './menu';
import tableMock from './tableData';
export default [
    ...userMock,
    ...menuMock,
    ...tableMock
] as MockMethod[]