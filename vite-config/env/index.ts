import _ from 'lodash-es';
function parseEnv(env: Record<string, any>): ViteEnv {
    const cloneEnv = _.cloneDeep(env);

    Object.entries(cloneEnv).forEach(([key, value]) => {
        if (['true', 'false'].includes(value)) {
            cloneEnv[key] = value === 'true';
        } else if (/^\d+$/.test(value)) {
            cloneEnv[key] = Number(value);
        } else if (value === 'undefined') {
            cloneEnv[key] = undefined;
        } else if (value === 'null') {
            cloneEnv[key] = null;
        } else if (key === 'VITE_PROXY') {
            cloneEnv[key] = JSON.parse(value.replace(/'/g, '"'));
        } else {
            cloneEnv[key] = value;
        }
    })

    return cloneEnv as unknown as ViteEnv;
}

export default parseEnv;



export function getGlobalEnv() {
    return parseEnv(import.meta.env);
}