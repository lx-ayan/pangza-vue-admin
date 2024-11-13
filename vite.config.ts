import { UserConfig, loadEnv } from 'vite'
import createVite from './vite';
import parseEnv from './vite/env';

// https://vitejs.dev/config/
export default ({ command, mode }: any): UserConfig => {

  // project cmd url
  const root = process.cwd();

  const env = parseEnv(loadEnv(mode, root));

  const config = createVite(env, command === 'build');

  return config;

}


