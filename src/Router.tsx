import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Pages from "./Pages";

export default function Router() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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