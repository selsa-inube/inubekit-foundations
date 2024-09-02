import { palette } from "./palette";

const checkbox = {
 border: {
  color:{
    active: palette.neutral.N80,
    indeterminate: palette.neutralAlpha.N0A,
    checked: palette.neutralAlpha.N0A,
    invalid: palette.red.R400,
    disabled: palette.neutral.N40,
  }
 },
 background: {
  color: {
    active: palette.neutral.N0,
    indeterminate: palette.blue.B400,
    checked: palette.blue.B400,
    invalid: palette.blue.B400,
    disabled: palette.neutral.N20,
  }
 },
 vector: {
  color: {
    indeterminate: palette.neutral.N0,
    checked: palette.neutral.N0,
    invalid: palette.neutral.N0,
    disabled: palette.neutral.N60,
    hover: palette.blue.B300
  }
 }
};

export { checkbox };
