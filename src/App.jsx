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
import { Quote } from "./components/common/Quote";
import Contact from "./components/pages/Contact";
import ResumePage from "./components/layouts/ResumePage";
import Container from "./components/layouts/Container";
import Layout from "./components/common/Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Container>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/:slug" element={<ProjectContent />} />
            <Route path="blogs/:slug" element={<BlogContent />} />
          </Routes>
          <Quote />
          <Footer />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}

export default App;
