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
    border: {
      color: {
        regular: palette.blue.B400,
        disabled: palette.neutral.N70,
        hover: palette.blue.B300,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.green.G400,
        disabled: palette.neutral.N70,
        hover: palette.green.G300,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.yellow.Y400,
        disabled: palette.neutral.N70,
        hover: palette.yellow.Y300,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.red.R400,
        disabled: palette.neutral.N70,
        hover: palette.red.R300,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.purple.P400,
        disabled: palette.neutral.N70,
        hover: palette.purple.P300,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N500,
      },
    },
    contrast: {
      appearance: {
        regular: "light",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.neutral.N20,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N30,
      },
    },
    contrast: {
      appearance: {
        regular: "dark",
        disabled: "gray",
      },
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
    border: {
      color: {
        regular: palette.neutral.N20,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N0,
      },
    },
    contrast: {
      appearance: {
        regular: "dark",
        disabled: "gray",
      },
    },
  },
};

export { button };
