import { palette } from "./palette";

const text = {
  primary: {
    content: {
      color: {
        regular: palette.blue.B400,
        disabled: palette.neutral.N70,
        hover: palette.blue.B300,
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
  },
  warning: {
    content: {
      color: {
        regular: palette.yellow.Y400,
        disabled: palette.neutral.N70,
        hover: palette.yellow.Y300,
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
  },
  help: {
    content: {
      color: {
        regular: palette.purple.P400,
        disabled: palette.neutral.N70,
        hover: palette.purple.P300,
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
  },
  gray: {
    content: {
      color: {
        regular: palette.neutral.N300,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N100,
      },
    },
  },
  light: {
    content: {
      color: {
        regular: palette.neutral.N100,
        disabled: palette.neutral.N70,
        hover: palette.neutral.N0,
      },
    },
  },
};

export { text };
