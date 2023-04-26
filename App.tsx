import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

import { defaultTheme } from "./src/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </ThemeProvider>
    </>
  );
}
