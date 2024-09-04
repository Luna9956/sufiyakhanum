import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
  },
});

export const myGlobalContext = createContext();

export default function CustomTheme({ children }) {
  const [darkMode, setdarkMode] = useState(false);
  const toggleThemeFn = () => {
    setdarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <myGlobalContext.Provider
        value={{ toggleThemeFn: toggleThemeFn, darkMode: darkMode }}
      >
        {children}
      </myGlobalContext.Provider>
    </ThemeProvider>
  );
}
