type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd';

type NullAble<T = any> = T | null;

type WithFalse<T = any> = T | false;

type TimeoutHandle = ReturnType<typeof setTimeout>;

type ValueType = string | boolean | undefined | null | number;

interface LabelOption {
    label: string;
    value: ValueType;
    disabled?: boolean;
}

type LabelOptionList = Array<LabelOption>;

/**
 * @description Omit<T, K>:  T 表示类型， K 表示 T 里面的字段 => 返回出 T 里面不要 K 的字段的类型
 * @description Pick<T, K>:  T 表示类型， K 表示 T 里面的字段 => 返回出 T 里面只要 K 的字段的类型
 * @description Partial<T>: T 类型中的所有字段表示可选
 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type LangType = 'en' | 'zh';