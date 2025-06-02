/** @type {import('tailwindcss').Config} */
// @import 'src/styles.css';
module.exports = {
  content: ["./src/**/*.{html,ts, css}"],
  theme: {
    extend: {
      colors: {
        bg_dark_color: "#000000",
        dark_gray: "#4A5565",
        orange_color: "#E79605",
        lite_dark: "#1A1A1A",
        dark_blue: "#1E293B",
        gray_color: "#344054",
        lite_gray: "#6A7282",
        lite_orange: "#F9A601",
        grey: "#313B46",
        lite_dark: "#3E444B",
        lite_grey: "#A1A1A1",
        sub_white: "#D9D9D9",
        lite_white: "#E5E5E5",
        sub_grey: "#D2D7E1",
        lite: "#FAFAFA",
        sub_lite: "#F3F4F6",
        light: "#D1D5DC",
        nav_link: "#242424",
        jobBtns_bg: "#F1F3F6",
        job_icon: "#EAEBEE",
      },
      fontFamily: {
        pri_font: "Onest",
        sec_font: "Space Grotesk",
      },
    },
  },
  plugins: [],
};
