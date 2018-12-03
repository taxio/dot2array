import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      dark: "#E64A19",
      light: "#FFCCBC",
      main: "#FF5722"
    },
    secondary: {
      contrastText: "#fff",
      main: "#536DFE"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;