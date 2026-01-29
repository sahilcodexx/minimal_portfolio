import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/common/ScrollToTop";
import { PostHogProvider } from 'posthog-js/react';
import Posthogpageviewtracker from "./lib/posthogpageviewtracker";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        capture_pageview:false,
        capture_exceptions: true,
      }}
    >
      <BrowserRouter>
        <Posthogpageviewtracker />
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </HelmetProvider>,
);