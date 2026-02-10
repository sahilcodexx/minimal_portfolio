import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/common/ScrollToTop";
import {ReactLenis} from "./lib/lenis"

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ReactLenis>
  </HelmetProvider>,
);