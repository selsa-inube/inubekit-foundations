import { palette } from "./palette";

const tag = {
  primary: {
    normal: {
      background: {
        color: palette.blue.B50,
      },
      content: {
        appearance: "primary",
      },
    },
    strong: {
      background: {
        color: palette.blue.B400,
      },
      content: {
        appearance: "light",
      },
    },
  },
  success: {
    normal: {
      background: {
        color: palette.green.G50,
      },
      content: {
        appearance: "success",
      },
    },
    strong: {
      background: {
        color: palette.green.G400,
      },
      content: {
        appearance: "light",
      },
    },
  },
  warning: {
    normal: {
      background: {
        color: palette.yellow.Y50,
      },
      content: {
        appearance: "warning",
      },
    },
    strong: {
      background: {
        color: palette.yellow.Y400,
      },
      content: {
        appearance: "dark",
      },
    },
  },
  danger: {
    normal: {
      background: {
        color: palette.red.R50,
      },
      content: {
        appearance: "danger",
      },
    },
    strong: {
      background: {
        color: palette.red.R400,
      },
      content: {
        appearance: "light",
      },
    },
  },
  help: {
    normal: {
      background: {
        color: palette.purple.P50,
      },
      content: {
        appearance: "help",
      },
    },
    strong: {
      background: {
        color: palette.purple.P400,
      },
      content: {
        appearance: "light",
      },
    },
  },
  dark: {
    normal: {
      background: {
        color: palette.neutral.N30,
      },
      content: {
        appearance: "dark",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N900,
      },
      content: {
        appearance: "light",
      },
    },
  },
  gray: {
    normal: {
      background: {
        color: palette.neutral.N10,
      },
      content: {
        appearance: "gray",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N30,
      },
      content: {
        appearance: "gray",
      },
    },
  },
  light: {
    normal: {
      background: {
        color: palette.neutral.N0,
      },
      content: {
        appearance: "dark",
      },
    },
    strong: {
      background: {
        color: palette.neutral.N10,
      },
      content: {
        appearance: "dark",
      },
    },
  },
};
export { tag };
