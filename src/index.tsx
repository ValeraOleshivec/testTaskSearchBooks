import React from "react";
import { render } from "react-dom";
import App from "components/App";
import "../config/styles/global.scss";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
