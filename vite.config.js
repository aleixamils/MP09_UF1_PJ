import { defineConfig } from 'vite';

export default defineConfig({
    root: './public', // Set public as root
    build: {
        outDir: '../dist', // Output directory for build
        emptyOutDir: true, // Ensure clean build by clearing the output directory
    },
    server: {
        open: true, // Opens in the browser when starting the server
    },
});

