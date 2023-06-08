const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    height: {
      screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  plugin(function ({
    addBase,
    addComponents,
    addUtilities,
    addVariant,
    theme,
  }) {
    addBase({
      h1: {
        fontSize: theme("fontSize.2xl"),
      },
      h2: {
        fontSize: theme("fontSize.xl"),
      },
    });
    // addComponents({
    //   ".card": {
    //     backgroundColor: theme("colors.white"),
    //     borderRadius: theme("borderRadius.lg"),
    //     padding: theme("spacing.6"),
    //     boxShadow: theme("boxShadow.xl"),
    //   },
    // });
    addUtilities({
      ".grid-stack > *": {
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
      },
    }),
      addUtilities({
        ".grid-fluid": {
          "grid-template-columns":
            "repeat(auto-fill, minmax(min(100%,10rem), 1fr))",
        },
      }),
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      }),
      addUtilities({
        ".fluid-container": {
          width: "min(100% - 2rem, 80rem)",
          "margin-left": "auto",
          "margin-right": "auto",
        },
      }),
      addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
  }),
];
