import { palette } from "./palette";

const button = {
  primary: {
    content: {
      color: {
        regular: palette.blue.B400,
        disabled: palette.neutral.N20,
        hover: palette.blue.B300,
      },
    },
    contrast: {
      appereance: "light",
    },
  },
  success: {
    content: {
      color: {
        regular: palette.green.G400,
        disabled: palette.neutral.N20,
        hover: palette.green.G300,
      },
    },
    contrast: {
      appereance: "light",
    },
  },
  warning: {
    content: {
      color: {
        regular: palette.yellow.Y400,
        disabled: palette.neutral.N20,
        hover: palette.yellow.Y300,
      },
    },
    contrast: {
      appereance: "dark",
    },
  },
  danger: {
    content: {
      color: {
        regular: palette.red.R400,
        disabled: palette.neutral.N20,
        hover: palette.red.R300,
      },
    },
    contrast: {
      appereance: "light",
    },
  },
  help: {
    content: {
      color: {
        regular: palette.purple.P400,
        disabled: palette.neutral.N20,
        hover: palette.purple.P300,
      },
    },
    contrast: {
      appereance: "light",
    },
  },
  dark: {
    content: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N500,
      },
    },
    contrast: {
      appereance: "light",
    },
  },
  gray: {
    content: {
      color: {
        regular: palette.neutral.N20,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N30,
      },
    },
    contrast: {
      appereance: "dark",
    },
  },
  light: {
    content: {
      color: {
        regular: palette.neutral.N20,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N0,
      },
    },
    contrast: {
      appereance: "dark",
    },
  },
};

export { button };
