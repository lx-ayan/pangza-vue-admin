const IS_NUMBER_REG = /^\d+$/;
const IS_SINGLE_QUTATION_MARK_REG = /'/g;
const BOOL_VALUE = ['true', 'false'];

function parseEnv(env: Record<string, string>): ImportMetaEnv {
    const innerEnv = JSON.parse(JSON.stringify(env));
    Object.entries(innerEnv).forEach((item) => {
        let [key, value] = item as [keyof ViteEnv, string];
        if (key === 'VITE_PROXY') {
            value = value.replace(IS_SINGLE_QUTATION_MARK_REG, '"');
            innerEnv[key] = JSON.parse(value);
        } else if (BOOL_VALUE.includes(value)) {
            innerEnv[key] = value === 'true';
        } else if (value === 'undefined') {
            innerEnv[key] = undefined;
        } else if (value === 'null') {
            innerEnv[key] = null;
        } else if (IS_NUMBER_REG.test(value)) {
            innerEnv[key] = Number(value);
        } else {
            innerEnv[key] = value;
        }
    })
    return innerEnv
}

function getGlobalEnv() {
    return parseEnv(import.meta.env);
}

export {
    parseEnv,
    getGlobalEnv
}