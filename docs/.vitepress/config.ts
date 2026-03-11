import { defineConfig } from "vitepress";

export default defineConfig({
  title: "color-box",
  description: "A TypeScript color utility library",
  base: "/color-box/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "API Reference", link: "/api/classes/Color" },
      { text: "Website", link: "https://jgleman.com/color-box/" },
    ],

    sidebar: [
      {
        text: "API Reference",
        items: [
          { text: "Color", link: "/api/classes/Color" },
          {
            text: "Getters",
            collapsed: false,
            items: [
              { text: "getAlpha", link: "/api/functions/getAlpha" },
              { text: "getBlue", link: "/api/functions/getBlue" },
              { text: "getGreen", link: "/api/functions/getGreen" },
              { text: "getHue", link: "/api/functions/getHue" },
              { text: "getLightness", link: "/api/functions/getLightness" },
              { text: "getRed", link: "/api/functions/getRed" },
              { text: "getRgb", link: "/api/functions/getRgb" },
              { text: "getSaturation", link: "/api/functions/getSaturation" },
            ],
          },
          {
            text: "Setters",
            collapsed: false,
            items: [
              { text: "setAlpha", link: "/api/functions/setAlpha" },
              { text: "setHsl", link: "/api/functions/setHsl" },
              { text: "setHue", link: "/api/functions/setHue" },
              { text: "setLightness", link: "/api/functions/setLightness" },
              { text: "setSaturation", link: "/api/functions/setSaturation" },
            ],
          },
          {
            text: "Adjustments",
            collapsed: false,
            items: [
              { text: "adjustHue", link: "/api/functions/adjustHue" },
              { text: "darken", link: "/api/functions/darken" },
              { text: "desaturate", link: "/api/functions/desaturate" },
              { text: "lighten", link: "/api/functions/lighten" },
              { text: "saturate", link: "/api/functions/saturate" },
            ],
          },
          {
            text: "Transformations",
            collapsed: false,
            items: [
              { text: "complement", link: "/api/functions/complement" },
              { text: "grayscale", link: "/api/functions/grayscale" },
              { text: "invert", link: "/api/functions/invert" },
              { text: "mix", link: "/api/functions/mix" },
            ],
          },
          {
            text: "Output",
            collapsed: false,
            items: [
              { text: "hexString", link: "/api/functions/hexString" },
              { text: "hslString", link: "/api/functions/hslString" },
              { text: "rgbString", link: "/api/functions/rgbString" },
            ],
          },
          {
            text: "Accessibility",
            collapsed: false,
            items: [
              { text: "contrast", link: "/api/functions/contrast" },
              {
                text: "relativeLuminance",
                link: "/api/functions/relativeLuminance",
              },
            ],
          },
          {
            text: "Utilities",
            collapsed: false,
            items: [
              { text: "isColorValid", link: "/api/functions/isColorValid" },
              { text: "isHSLColor", link: "/api/functions/isHSLColor" },
              { text: "isRGBColor", link: "/api/functions/isRGBColor" },
            ],
          },
          {
            text: "Types",
            collapsed: false,
            items: [
              { text: "ColorType", link: "/api/interfaces/ColorType" },
              { text: "HSLColor", link: "/api/type-aliases/HSLColor" },
              { text: "RGBColor", link: "/api/type-aliases/RGBColor" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jgleman/color-box" },
    ],

    search: {
      provider: "local",
    },
  },
});
