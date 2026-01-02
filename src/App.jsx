import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/landing/theme-provider";
import Home from "./components/pages/Home";
import { Navbar } from "./components/common/Navbar";
import Blogs from "./components/pages/Blogs";
import ProjectContent from "./app/projects/ProjectContent";
import Work from "./components/pages/Work";
import BlogContent from "./blog/BlogContent";
import Projects from "./components/pages/Projects";
import Footer from "./components/common/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectContent />} />
        <Route path="blogs/:slug" element={<BlogContent />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
