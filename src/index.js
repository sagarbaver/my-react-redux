import React from "react";
import { render } from "react-dom";

import Root from "./components/App";
import configureStore from "./configureStore";
// import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));

// registerServiceWorker();
