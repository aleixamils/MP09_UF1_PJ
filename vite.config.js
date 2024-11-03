import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Ensures that all paths in the built files are relative
    root: './public', // Specifies the public directory as root
    build: {
        outDir: '../dist', // Output directory with relative path from public
        emptyOutDir: true, // Clears the output directory before building
    },
    server: {
        open: true,
    },
});



