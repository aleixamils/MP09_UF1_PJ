import { defineConfig } from "vite";

export default defineConfig({
    //base: "./",
    root: "./public", // Root directory for Vite
    server: {
        watch: {
            usePolling: true, // Ensures changes are detected in some environments
        },
    },
});



