import { palette } from "./palette";

const tag = {
  primary: {
    normal: {
      background: {
        color: palette.blue.B50,
      },
      content: {
        apparence: "primary",
      },
    },
    strong: {
      background: {
        color: palette.blue.B400,
      },
      content: {
        apparence: "light",
      },
    },
  },
  success: {
    normal: {
      background: {
        color: palette.green.G50,
      },
      content: {
        apparence: "success",
      },
    },
    strong: {
      background: {
        color: palette.green.G400,
      },
      content: {
        apparence: "light",
      },
    },
  },
  warning: {
    normal: {
      background: {
        color: palette.yellow.Y50,
      },
      content: {
        apparence: "warning",
      },
    },
    strong: {
      background: {
        color: palette.yellow.Y400,
      },
      content: {
        apparence: "dark",
      },
    },
  },
  danger: {
    normal: {
      background: {
        color: palette.red.R50,
      },
      content: {
        apparence: "danger",
      },
    },
    strong: {
      background: {
        color: palette.red.R400,
      },
      content: {
        apparence: "light",
      },
    },
  },
  help: {
    normal: {
      background: {
        color: palette.purple.P50,
      },
      content: {
        apparence: "help",
      },
    },
    strong: {
      background: {
        color: palette.purple.P400,
      },
      content: {
        apparence: "light",
      },
    },
  },
  dark: {
    normal: {
      background: {
        color: palette.neutral.N30,
      },
      content: {
        apparence: "dark",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N900,
      },
      content: {
        apparence: "light",
      },
    },
  },
  gray: {
    normal: {
      background: {
        color: palette.neutral.N10,
      },
      content: {
        apparence: "gray",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N30,
      },
      content: {
        apparence: "gray",
      },
    },
  },
  light: {
    normal: {
      background: {
        color: palette.neutral.N0,
      },
      content: {
        apparence: "dark",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N10,
      },
      content: {
        apparence: "dark",
      },
    },
  },
};
export { tag };
