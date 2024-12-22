import { UserConfig, loadEnv } from 'vite'
import createConfig from './vite-config';
import { parseEnv } from './vite-config/env';
// https://vitejs.dev/config/
export default ({ command, mode }): UserConfig => {
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  const userConfig = createConfig(env, command === 'build');
  return userConfig
}