import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      //   "-apple-system",
      //   "BlinkMacSystemFont",
      //   '"Segoe UI"',
      //   "Roboto",
      //   '"Helvetica Neue"',
      //   "Arial",
      "sans-serif",
      //   '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
