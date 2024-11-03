import { defineConfig } from "vite";

export default defineConfig({
    root: "./public", // Root directory for Vite
    server: {
        watch: {
            usePolling: true, // Ensures changes are detected in some environments
        },
    },
});



