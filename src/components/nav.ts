import { palette } from "./palette";

const nav = {
  background: {
    color: palette.neutral.N10,
  },
  divider: {
    color: palette.neutral.N40,
  },
  title: {
    appearance: "gray",
  },
  subtitle: {
    appearance: {
      regular: "gray",
      expanded: "primary",
    },
    background: {
      expanded: palette.neutral.N30,
    },
  },
  link: {
    appearance: {
      regular: "dark",
      selected: "primary",
    },
    background: {
      selected: palette.neutral.N30,
      hover: palette.neutral.N30,
    },
  },
  copyright: {
    appearance: "gray",
  },
};

export { nav };
