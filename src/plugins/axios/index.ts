import axiosConfig from "@/config/axios";
import VAxios from "./VAxios";

const request = new VAxios(axiosConfig);

export default request;