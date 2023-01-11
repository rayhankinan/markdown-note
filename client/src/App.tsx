import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Routing from "./routing";

function App() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default App;
