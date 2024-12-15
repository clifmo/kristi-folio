/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import Unocss from 'unocss/vite';
import { presetChroma } from 'unocss-preset-chroma';
import ViteFonts from 'vite-plugin-fonts';
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue(),
        // https://github.com/hannoeru/vite-plugin-pages
        Pages(),
        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                'vitest',
            ],
            dts: true,
        }),
        // https://github.com/antfu/vite-plugin-components
        Components({
            dts: true,
        }),
        // https://github.com/antfu/unocss
        Unocss({
            shortcuts: [
                ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-black disabled:opacity-50'],
                ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
                ['footer-heading', 'uppercase font-bold mb-2.5'],
                ['social-button', 'rounded-full border-2 dark:border-white border-black dark:text-white text-black leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'],
                ['bg-base', 'dark:bg-black bg-white'],
                ['form-input', 'py-3 px-4 block w-full shadow-md focus:border-longevity-blue border-black transition-colors focus:outline-none focus:ring-0 rounded'],
                ['link-text', 'font-medium text-black hover:text-black transition-colors underline'],
                ['project-preview', 'form-input h-50 mb-12 flex flex-col justify-center'],
            ],
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                }),
                presetChroma(),
            ],
        }),
        // https://github.com/stafyniaksacha/vite-plugin-fonts
        ViteFonts({
            google: {
                families: ['Playfair Display', 'Lato'],
            },
        }),
    ],
    // https://github.com/vitest-dev/vitest
    test: {
        environment: 'jsdom',
    },
    optimizeDeps: {
        include: ['./node_modules/unocss-preset-chroma/dist/index.js'],
    },
});
