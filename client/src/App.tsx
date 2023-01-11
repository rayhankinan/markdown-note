import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";

import ColorModeContext from "@context/color-mode";
import Routing from "./routing";

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const initialMode = prefersDarkMode ? "dark" : "light";

    const [mode, setMode] = React.useState<"light" | "dark">(initialMode);
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <React.Fragment>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Routes>
                            {Routing.map((route) => {
                                const Component = route.component;
                                return (
                                    <Route
                                        caseSensitive
                                        path={route.path}
                                        key={route.path}
                                        element={<Component />}
                                    />
                                );
                            })}
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </React.Fragment>
    );
}

export default App;
