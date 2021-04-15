import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import gsap from 'gsap'

const { resolve } = require('path')

export default defineConfig({
    plugins: [pugPlugin()],

    server: { port: 9001 },
    optimizeDeps: {
        // include: ['gsap/ScrollTrigger.js'],
    },

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                page: resolve(__dirname, 'pages/page.html'),
            },
        },
        minify: 'esbuild'
    },
})
