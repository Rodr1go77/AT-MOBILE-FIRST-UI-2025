import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        justifyContent: "space-evenly",
        width: "auto",
        border: "3px solid #0ebe75",
        borderRadius: 5,
        margin: 2,
        padding: 1.5,
        bgcolor: "#dcf5ec",
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: "bold",
          color: "#0ebe75",
          fontSize: 18,
        },
        body1: {
          marginTop: 0,
          marginBottom: 0,
        },
        h6: {
          fontWeight: "bold",
          color: "#0ebe75",
          fontSize: "1.2rem",
        },
      },
    },
  },
});

export default theme;
