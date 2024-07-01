import { hideFullLoading, showFullLoading } from "@/config/loading";
import np from "@/config/nprogress";
import themeStore from "@/store/theme";
import userStore from "@/store/user";
import { getToken } from "@/utils/security";
import { RouteLocationNormalized, Router } from "vue-router";
import autoLoadRoutes from ".";

class RouterGuard {
    router: Router | null = null;

    finish = false;

    constructor(router: Router) {
        this.router = router;
    }

    run() {
        this.router!.beforeEach(this.beforeEach.bind(this));
        this.router!.afterEach(this.afterEach);
    }

    private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        const useThemeStore = themeStore();
        if(to.path == '/login') {
            this.finish = false;
        }
        
        if (!this.finish && getToken()) {
            console.log(123);
            await autoLoadRoutes(this.router!);
            this.finish = true;
        }

        if (useThemeStore.nprogress) {
            np.start();
        }
        if (useThemeStore.loading) {
            showFullLoading('页面加载中...');
        }

        if (this.isGuest(to) === false) {
            return { name: 'home' }
        }

        if (this.isLogin(to) === false) {
            return { name: 'login' }
        }

    }

    private afterEach() {
        np.done();
        hideFullLoading();
    }

    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !getToken()));
    }

    private isLogin(route: RouteLocationNormalized) {
        return Boolean(!route.meta.auth || (route.meta.auth && getToken()));
    }

    private getUser() {
        const user = userStore().getUser;
        if (getToken()) return user;
    }
}


export default (router: Router) => {
    const routerGuard = new RouterGuard(router);
    routerGuard.run();
}