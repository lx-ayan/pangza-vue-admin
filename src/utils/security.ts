import { StoreEnum } from "@/common/enums";
import storeUtil from "./store";

export function getToken() {
    return storeUtil.get<string>(StoreEnum.TOKEN);
}