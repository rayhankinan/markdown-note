import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import "vite/client";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: parseInt(import.meta.env.VITE_PORT) || 3000,
    },
});
