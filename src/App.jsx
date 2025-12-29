import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/landing/theme-provider";
import Home from "./components/pages/Home";
import { Navbar } from "./components/common/Navbar";
import Blogs from "./components/pages/Blogs";
import ProjectContent from "./app/projects/ProjectContent";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects/:slug" element={<ProjectContent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
