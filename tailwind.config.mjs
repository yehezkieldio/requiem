import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope", ...defaultTheme.fontFamily.sans],
                mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                background: "#070707",
                foreground: "#ffffff",
                text: "#9b9b9b",
                input: "hsl(240 3.7% 15.9%)",
            },
            dropShadow: {
                glow: ["0 0px 20px rgba(255,255, 255, 0.03)", "0 0px 65px rgba(255, 255,255, 0.02)"],
            },
        },
    },
    plugins: [],
};
