import { DATE_FOMART } from "@/config/date";
import moment from "moment";


export function dateToStr(date: Date = new Date()) {
    return moment(date).format(DATE_FOMART);
}