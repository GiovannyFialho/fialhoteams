import { ThemeProvider } from "styled-components";

import { Groups } from "@screens/Groups";
import { defaultTheme } from "@theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Groups />
    </ThemeProvider>
  );
}
