import { palette } from "./palette";

const menu = {
  avatar: {
    appearance: "primary",
  },
  username: {
    appearance: "dark",
  },
  client : {
    appearance: "gray",
  },
  heading: {
    appearance: "gray",
  },
  item:{
    content: "dark",
    background: {
      hover: palette.neutral.N20,
      disabled: palette.neutral.N20,
    }
  },
  background: {
    color: palette.neutral.N0,
  },
  divider: {
    color: palette.neutral.N40,
  }
};

export { menu };
