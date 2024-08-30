import { palette } from "./palette";

const radiofield = {
  border: {
    color: {
      active: palette.neutral.N80,
      checked: palette.neutralAlpha.N0A,
      invalid: palette.red.R400,
      disabled: palette.neutral.N40,
    },
  },
  background: {
    color: {
      active: palette.neutral.N0,
      checked: palette.blue.B400,
      invalid: palette.blue.B400,
      disabled: palette.neutral.N20,
    },
  },
  foreground: {
    color: {
      checked: palette.neutral.N0,
      invalid: palette.neutral.N0,
      disabled: palette.neutral.N60,
    },
  },
  outline:{
    color: {
      hover: palette.blue.B300,
    }
  }
};

export { radiofield };
