import { getGlobalEnv } from "@v/env";
import VAxios from "./VAxios";

const env = getGlobalEnv();

const request = VAxios.createVAxios({ timeout: env.VITE_AXIOS_TIMEOUT, baseURL: env.VITE_BASE_API });

export default request;