import { DATE_FORMAT_EN } from "@/config/date";
import { Nullable } from "@t/global";
import moment from "moment";
type MonitorCallbackFn = (data: any) => void;
class Monitor {

    private instance: Nullable<PerformanceObserver> = null;

    private entries: Nullable<PerformanceObserverEntryList> = null;

    private create(callback?: () => void) {
        return new PerformanceObserver((entries) => this.observerHandler(entries, callback));
    }

    private observerHandler(entries: PerformanceObserverEntryList, callback?: () => void) {
        this.entries = entries;
        if (callback) {
            callback();
        }
    }

    public getEntries() {
        return this.entries;
    }

    private getEntiry(name: PerformanceEntry['name']) {
        const entries = this.getEntries();
        return entries?.getEntries().find(entry => entry.name === name);
    }

    private getJSONData(json: any, name: string) {
        return {
            ...json,
            type: 'performance',
            subType: name,
            pageUrl: window.location.href,
            time: moment().format(DATE_FORMAT_EN)
        }
    }

    public onPaint(callback?: MonitorCallbackFn) {
        this.instance = this.create(() => {
            const paintEntry = this.getEntiry('first-paint');
            if (paintEntry) {
                const json = paintEntry.toJSON();
                const reportData = this.getJSONData(json, paintEntry.name);
                if (callback) {
                    callback(reportData);
                }
            }
        });
        this.instance.observe({ type: 'paint', buffered: true });
    }

    public disconnect() {
        if (this.instance) {
            this.instance.disconnect();
        }
    }

    public onLCP(callback?: MonitorCallbackFn) {
        this.instance = this.create(() => {
            const entires = this.getEntries();
            const resultMap = new Map();
            for (const entry of entires!.getEntries()) {
                this.disconnect();
                resultMap.set(entry.name, this.getJSONData(entry.toJSON(), entry.name));
            }
            if (callback) {
                callback(resultMap);
            }
        });

        this.instance.observe({ type: 'largest-contentful-paint', buffered: true });
    }

    public onFCP(callback?: MonitorCallbackFn) {
        this.instance = this.create(() => {
            const paintEntry = this.getEntiry('first-contentful-paint');
            if (paintEntry) {
                const json = paintEntry.toJSON();
                const reportData = this.getJSONData(json, paintEntry.name);
                if (callback) {
                    callback(reportData);
                }
            }
        });
        this.instance.observe({ type: 'paint', buffered: true });
    }

    public onResources(callback: MonitorCallbackFn) {
        this.instance = this.create(() => {
            const entries = this.getEntries();
            const resultMap = new Map();
            for (const entry of entries!.getEntries()) {
                this.disconnect();
                resultMap.set(entry.name, this.getJSONData(entry.toJSON(), entry.name));
            }
            if (callback) {
                callback(resultMap);
            }
        });
        this.instance.observe({ type: 'resource', buffered: true })
    }

}

export default Monitor;