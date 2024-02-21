import { palette } from "./palette";

const icon = {
  primary: {
    content: {
      color: {
        regular: palette.blue.B400,
        disabled: palette.neutral.N70,
        hover: palette.blue.B300,
      },
    },
    background: {
      color: {
        regular: palette.blue.B400,
        disabled: palette.neutral.N20,
        hover: palette.blue.B300,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  success: {
    content: {
      color: {
        regular: palette.green.G400,
        disabled: palette.neutral.N70,
        hover: palette.green.G300,
      },
    },
    background: {
      color: {
        regular: palette.green.G400,
        disabled: palette.neutral.N20,
        hover: palette.green.G300,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  warning: {
    content: {
      color: {
        regular: palette.yellow.Y400,
        disabled: palette.neutral.N70,
        hover: palette.yellow.Y300,
      },
    },
    background: {
      color: {
        regular: palette.yellow.Y400,
        disabled: palette.neutral.N20,
        hover: palette.yellow.Y300,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  danger: {
    content: {
      color: {
        regular: palette.red.R400,
        disabled: palette.neutral.N70,
        hover: palette.red.R300,
      },
    },
    background: {
      color: {
        regular: palette.red.R400,
        disabled: palette.neutral.N20,
        hover: palette.red.R300,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  help: {
    content: {
      color: {
        regular: palette.purple.P400,
        disabled: palette.neutral.N70,
        hover: palette.purple.P300,
      },
    },
    background: {
      color: {
        regular: palette.purple.P400,
        disabled: palette.neutral.N20,
        hover: palette.purple.P300,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  dark: {
    content: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N500,
      },
    },
    background: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N500,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N10,
      },
    },
  },
  gray: {
    content: {
      color: {
        regular: palette.neutral.N300,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N100,
      },
    },
    background: {
      color: {
        regular: palette.neutral.N300,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N100,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N900,
      },
    },
  },
  light: {
    content: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N0,
      },
    },
    background: {
      color: {
        regular: palette.neutral.N10,
        disabled: palette.neutral.N20,
        hover: palette.neutral.N0,
      },
    },
    contrast: {
      color: {
        regular: palette.neutral.N900,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N900,
      },
    },
  },
};

export { icon };
