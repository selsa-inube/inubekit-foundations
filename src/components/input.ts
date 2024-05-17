import { palette } from "./palette";

export const input = {
  border: {
    color: {
      regular: palette.neutral.N40,
      disabled: palette.neutral.N40,
      focus: palette.blue.B400,
      invalid: palette.red.R400,
    },
  },
  background: {
    color: {
      regular: palette.neutralAlpha.N0A,
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
    color: {
      regular: palette.red.R400,
    },
  },
  required: {
    color: {
      regular: palette.red.R400,
      disabled: palette.neutral.N70,
    },
  },
  optionList: {
    appearance: {
      regular: "dark",
      expanded: "primary",
    },
    background: {
      selected: palette.neutral.N30,
    }
  }
};
