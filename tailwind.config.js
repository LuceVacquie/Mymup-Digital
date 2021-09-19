const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            colors: {
                yellow: "#FBC119",
                pink: "#CA5096",
                purple: "#785FA4",
                orange: "#F18F35",
                blue: "#088DCD",
                lightGrey: "#f1f1f1",
                mediumGrey: "#87868a",
                darkGrey: "#38373C",
                footerLink: "#B5B4BB",
            },
            fontSize: {
                "10xl": "12rem",
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
