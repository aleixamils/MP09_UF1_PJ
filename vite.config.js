import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: "./", // Root directory for Vite
    base: "./", // Use relative paths for assets
    build: {
        outDir: "dist", // Output directory for the build
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                completedTasks: path.resolve(__dirname, "src/pages/completedTaskList.html"),
                favoriteTasker: path.resolve(__dirname, "src/pages/favoriteTasker.html"),
                getStarted: path.resolve(__dirname, "src/pages/getStarted.html"),
                giveFeedback: path.resolve(__dirname, "src/pages/giveFeedback.html"),
                giveTips: path.resolve(__dirname, "src/pages/giveTips.html"),
                login: path.resolve(__dirname, "src/pages/login.html"),
                profile: path.resolve(__dirname, "src/pages/profile.html"),
                refer: path.resolve(__dirname, "src/pages/refer.html"),
                signup: path.resolve(__dirname, "src/pages/signup.html"),
                task_confirm: path.resolve(__dirname, "src/pages/task_confirm.html"),
                task_details: path.resolve(__dirname, "src/pages/task_details.html"),
                taskChat: path.resolve(__dirname, "src/pages/taskChat.html"),
                taskCompleted: path.resolve(__dirname, "src/pages/taskCompleted.html"),
                taskinfo: path.resolve(__dirname, "src/pages/taskinfo.html"),
                taskList: path.resolve(__dirname, "src/pages/taskList.html"),
                worker_profile: path.resolve(__dirname, "src/pages/worker_profile.html")
            },
        },
    },
    server: {
        watch: {
            usePolling: true, // Ensures changes are detected in some environments
        },
    },
});



