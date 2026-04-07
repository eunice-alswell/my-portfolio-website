import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pages from "./Pages";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Router() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/about" element={<Pages.AboutMe />} />
                <Route path="/projects" element={<Pages.Project />} />
                <Route path="/projects/:id" element={<Pages.ProjectDetail />} />
                <Route path="/blog" element={<Pages.Blog />} />
                <Route path="/contact" element={<Pages.Contact />} />
            </Routes>
        </Suspense>
    )
}