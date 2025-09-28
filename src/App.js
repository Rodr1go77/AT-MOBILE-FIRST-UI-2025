import "./styles.css";
import MainBox from "../Components/MainBox";
import {ThemeProvider } from "@mui/material/styles";
import theme from "../Components/theme"


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainBox />
      </div>
    </ThemeProvider>
  );
}
