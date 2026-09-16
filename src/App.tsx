import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { PortfolioHome as Index, PortfolioServices as Services, PortfolioContact as BookCall, PortfolioReviews as Reviews, PortfolioAbout as About, PortfolioProject as CaseStudy, PortfolioProjects as CaseStudyIndex, PortfolioNotFound as NotFound } from "./components/portfolio/Portfolio";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// Keeps old /case-study/:id links working by sending them to /projects/:id
const LegacyCaseStudyRedirect = () => {
  const { id } = useParams();

  return <Navigate to={`/projects/${id}`} replace />;
};

const App = () => (
  <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-call" element={<BookCall />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<CaseStudyIndex />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
            {/* Legacy redirects: old case-study links now point at /projects */}
            <Route path="/case-study" element={<Navigate to="/projects" replace />} />
            <Route path="/case-study/:id" element={<LegacyCaseStudyRedirect />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
  </MotionConfig>
);

export default App;
