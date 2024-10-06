import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the root element in the HTML for mounting the React app

if (!rootElement) throw new Error("Failed to find the root h1"); // Error handling to check if the root element exists

const root = createRoot(rootElement); // Initializing React's root for rendering the application

root.render(<MainContent />); // Rendering the MainContent component into the root element
