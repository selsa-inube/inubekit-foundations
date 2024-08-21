import { palette } from "./palette";

export const input = {
  border: {
    color: {
      regular: palette.neutral.N40,
      disabled: palette.neutral.N40,
      focus: palette.blue.B300,
      invalid: palette.red.R400,
    },
  },
  background: {
    color: {
      regular: palette.neutral.N0,
      disabled: palette.neutral.N10,
    },
  },
  content: {
    color: {
      regular: palette.neutral.N900,
      disabled: palette.neutral.N70,
    },
  },
  placeholder: {
    color: {
      regular: palette.neutral.N300,
    },
  },
  message: {
    appearance: 'danger'
  },
  required: {
    appearance: 'danger'
  },
  option: {
    appearance: {
      regular: "dark",
      hover: "primary",
    },
    background: {
      regular: palette.neutral.N0,
      hover: palette.neutral.N30,
    }
  }
};
