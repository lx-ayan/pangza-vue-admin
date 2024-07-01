import { IAxiosConfig } from "@t/global";

const AxiosConfig: (config: IAxiosConfig) => ClassDecorator = (config) => {
    return function (target) {
        target.prototype.option = config;
    }
}

export default AxiosConfig;