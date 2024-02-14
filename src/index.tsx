import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
const App = React.lazy(() => import("./App"));

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <App />
    </Router>
  );
}
