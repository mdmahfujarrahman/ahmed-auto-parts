module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/src/asset/bg.jpg')",
                "summary-bg": "url('/src/asset/summary.jpg')",
            },
        },
    },
    daisyui: {
        themes: [
            {
                aaptheme: {
                    primary: "#FF3737",
                    secondary: "#FFFFFF",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },

            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
};
