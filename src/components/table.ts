import { palette } from "./palette";

const table = {
  border:{
    color: palette.neutral.N40
  },
  heading:{
    background: palette.neutral.N0,
    color: palette.neutral.N900
  },
  action:{
    background: palette.neutral.N30,
    color: palette.neutral.N900
  },
  row:{
    background: {
      regular: palette.neutral.N0,
      zebra: palette.neutral.N30
    },
    color:{
      regular: palette.neutral.N900,
      zebra: palette.neutral.N900
    }
  },
  cell:{
    color:{
      primary: palette.blue.B400,
      success: palette.green.G400,
      warning: palette.yellow.Y400,
      danger: palette.red.R400,
      help: palette.purple.P400,
      dark: palette.neutral.N900,
      gray: palette.neutral.N300,
      light: palette.neutral.N900
    },
    background: {
      primary: palette.blue.B50,
      success: palette.green.G50,
      warning: palette.yellow.Y50,
      danger: palette.red.R50,
      help: palette.purple.P50,
      dark: palette.neutral.N30,
      gray: palette.neutral.N20,
      light: palette.neutral.N0
    }
  },
  pagination:{
    appearance: 'gray'
  },
  caption:{
    appearance: 'gray'
  }
};
export { table };
