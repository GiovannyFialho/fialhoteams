import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@theme/default";

// import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";

import { Loading } from "@components/Loading";

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
