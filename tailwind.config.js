module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fbfafc",
          100: "#f2fcf1",
          300: "#d4dcf1",
          500: "#999999",
          600: "#808080",
          700: "#585c69",
          900: "#18181a",
          "900_03": "#1e1e1e",
          "900_99": "#1e1e1e99",
          "50_99": "#fbfafc99",
          "300_02": "#d4dbf0",
          "900_05": "#171717",
          "900_06": "#242428",
          "300_01": "#d8dae5",
          "50_01": "#fafcfd",
          "50_03": "#f3f7fe",
          "800_01": "#484850",
          "900_04": "#101012",
          "900_02": "#232327",
          "100_02": "#f2f6fd",
          "900_01": "#0b153a",
          "100_03": "#f5f5f5",
          "900_b2": "#1e1e1eb2",
          "50_04": "#f8f9fb",
          "50_02": "#f9fafb",
          "900_bf": "#1e1e1ebf",
          "900_7f": "#1010127f",
        },
        indigo: {
          50: "#e3e9fb",
          100: "#bacaf5",
          900: "#0c2159",
          A200: "#5378f6",
          A200_01: "#547ef2",
          A200_7c: "#5378f67c",
        },
        white: { A700: "#ffffff", A700_e5: "#ffffffe5" },
        blue: {
          50: "#e5f0fd",
          A700: "#3366ff",
          A700_7f: "#3366ff7f",
          A700_59: "#3366ff59",
          A700_b2: "#3366ffb2",
          A700_0c: "#3366ff0c",
          "100_01": "#b0cdff",
        },
        light_green: { 900: "#594410" },
        lime: { 100: "#f5e9cb", "900_01": "#9f7c21" },
        blue_gray: {
          50: "#eaecf0",
          100: "#d9d9d9",
          300: "#8f95b2",
          500: "#667084",
          800: "#344053",
          900: "#303030",
          "700_01": "#475466",
          "100_01": "#cfd4dc",
        },
        black: { 900: "#0d0d0d", "900_01": "#000000" },
        red: { 400: "#e85e5e", 600: "#d14242" },
        green: { 800: "#0f920f" },
        deep_orange: { 50: "#fee4e4" },
        teal: { 300: "#52bd94" },
        yellow: { 800: "#eab221" },
      },
      boxShadow: {
        xs: "0px 16px  64px 0px #00000019",
        sm: "0px 1px  2px 0px #1018280c",
        md: "0px 16px  40px 0px #04410414",
        lg: "0px 24px  48px 24px #1e1e1e07",
        xl: "0px 6px  10px 0px #0000000f",
      },
      fontFamily: { inter: "Inter", clashdisplay: "Clash Display" },
      opacity: { 0.38: 0.38 },
      backgroundImage: { gradient: "linear-gradient(180deg, #171717,#17171719,#17171719,#171717)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
