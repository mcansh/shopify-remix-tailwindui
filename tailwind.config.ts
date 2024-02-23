import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [aspectRatioPlugin, formsPlugin, typographyPlugin],
} satisfies Config;
