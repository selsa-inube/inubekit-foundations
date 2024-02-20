import { palette } from "./palette";

const toggle = {
  on: {
    background: {
      color: {
        regular: palette.green.G400,
        disabled: palette.neutral.N20,
        hover: palette.green.G300,
      },
    },
    toggleBackground: {
      color: {
        regular: palette.neutral.N0,
        disabled: palette.neutral.N0,
        hover: palette.neutral.N0,
      },
    },
    toggleBorder: {
      color: {
        regular: palette.neutralAlpha.N0A,
        disabled: palette.neutral.N70,
        hover: palette.neutralAlpha.N0A,
      },
    },
    icon: {
      appereance: "light",
    },
  },
  off: {
    background: {
      color: {
        regular: palette.neutral.N20,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N10,
      },
    },
    toggleBackground: {
      color: {
        regular: palette.neutral.N0,
        disabled: palette.neutral.N0,
        hover: palette.neutral.N0,
      },
    },
    toggleBorder: {
      color: {
        regular: palette.neutral.N70,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N70,
      },
    },
    icon: {
      appereance: "gray",
    },
  },
};

export { toggle };
