import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/landing/theme-provider";
import Home from "./components/pages/Home";
import { Navbar } from "./components/common/Navbar";
import Blogs from "./components/pages/Blogs";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
