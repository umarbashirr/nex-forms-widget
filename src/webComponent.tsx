// src/webcomponents.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import WidgetButton from "./components/button";

const ButtonElement = reactToWebComponent(WidgetButton, React, ReactDOM);
customElements.define("nexform-widget-button", ButtonElement);

// Repeat for other components...
