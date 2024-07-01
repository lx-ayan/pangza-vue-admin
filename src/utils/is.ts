export function is(val: unknown, key: string) {
    return key.toLowerCase().trim() == toString.call(val).substring(7, toString.call(val).length - 1).toLowerCase().trim()
}

export function isFunction(val: unknown): val is Function {
    return is(val, 'Function');
}

export function isString(val: any): val is string {
    return is(val, 'String');
}

export function equals(value1: any, value2: any): boolean {
    if (isPrimitive(value1) || isPrimitive(value2)) {
        return Object.is(value1, value2);
    }

    const keys1 = Object.entries(value1);
    const keys2 = Object.entries(value2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    if (!keys1.every((item) => keys2.includes(item))) {
        return false;
    }

    for (const [k, v] of keys1) {
        if (!equals(v, value2[k])) {
            return false;
        }
    }

    return true;
}

function isPrimitive(value: any) {
    return value === null || !['object', 'function'].includes(typeof value);
}

export function isStringEmpty(str: string) {
    return str === '' || str === void 0 || str === null;
}

export function isArray(obj: any) {
    return Array.isArray(obj)
}

export function isArrEmpty(arr: any) {
    if (arr === void 0) return true;
    if (isArray(arr)) {
        return arr.length === 0;
    } else {
        return false;
    }
}