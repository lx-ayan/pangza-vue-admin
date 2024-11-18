import { BuildOptions } from "vite";

function createBuild(): BuildOptions {
    const build: BuildOptions = {
        rollupOptions: {
            output: {
                manualChunks: (file) => {
                    if(file.includes('node_modules')) {
                        return "vendor"
                    }
                }
            }
        }
    }
    return build;
}

export default createBuild;