export function queryStringToObject(queryString: string): any {
    const queryPairs = queryString.substring(1).split('&'); // 去掉开头的'?'并分割成键值对  
    const result: any = {};
    for (let i = 0; i < queryPairs.length; i++) {
        const pair = queryPairs[i].split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return result;
} 