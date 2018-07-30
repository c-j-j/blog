import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, _options, _styles) => ({
    a: {
      color: "black",
      "text-decoration": "none"
    },
    "h1,h2,h3,h4,h5": {
      marginBottom: rhythm(0.5)
    }
  })
});

export default typography;
