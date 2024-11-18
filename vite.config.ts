import { UserConfig, loadEnv } from 'vite'
import createViteConfig from './vite-config';
import parseEnv from './vite-config/env';

// https://vitejs.dev/config/
export default ({ command, mode }: any): UserConfig => {

  // project cmd url
  const root = process.cwd();

  const env = parseEnv(loadEnv(mode, root));

  const config = createViteConfig(env, command === 'build');

  return config;

}


