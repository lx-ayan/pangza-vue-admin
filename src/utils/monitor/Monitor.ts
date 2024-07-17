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

    private getEntry(name: PerformanceEntry['name']) {
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
            const paintEntry = this.getEntry('first-paint');
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

    // 最大内容绘制
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

    // 首绘
    public onFCP(callback?: MonitorCallbackFn) {
        this.instance = this.create(() => {
            this.disconnect();
            const paintEntry = this.getEntry('first-contentful-paint');
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

    // 静态资源统计
    public onResources(callback?: MonitorCallbackFn) {
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

    public onError(callback?: MonitorCallbackFn) {
        // source error
        window.addEventListener('error', function (e) {
            const target: any = e.target;
            if (!target) return;
            if (target.src || target.href) {
                const url = target.src || target.href;
                const data = {
                    type: 'error',
                    subType: 'resource',
                    message: e.message,
                    url,
                    html: target.outHTML,
                    pageUrl: window.location.href,
                    paths: (e as any).path,
                    time: moment().format(DATE_FORMAT_EN)
                }
                if (callback) {
                    callback(data);
                }
            }
        }, true);

        window.onerror = function (message, url, lineNo, columNo, error) {
            const data = {
                type: 'error',
                subType: 'js',
                url,
                message,
                lineNo,
                columNo,
                statck: error?.stack,
                pageUrl: window.location.href,
                time: moment().format(DATE_FORMAT_EN)

            }
            if (callback) {
                callback(data);
            }
        }

        window.addEventListener('unhandledrejection', (e) => {
            const data = {
                type: 'error',
                subType: 'js',
                message: e.reason,
                pageUrl: window.location.href,
                time: moment().format(DATE_FORMAT_EN)
            }
            if (callback) {
                callback(data);
            }
        })
    }

}

export default Monitor;