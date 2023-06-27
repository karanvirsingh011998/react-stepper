import React from "react";
import ReactDOM from "react-dom/client";

import ReactStepper from "./reactStepper";

import reportWebVitals from "./reportWebVitals";
import { ThemeContext, themes } from "./themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themes.dark}>
      <ReactStepper />
    </ThemeContext.Provider>
  </React.StrictMode>
);
reportWebVitals();
