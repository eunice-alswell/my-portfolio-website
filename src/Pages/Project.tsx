import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { getProjectPreviews } from "@/lib/api";
import type { ProjectPreviewProps } from "../lib/types";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectPreviewProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      const data = await getProjectPreviews();
      setProjects(data);
      setIsLoading(false);
    };
    loadProjects();
  }, []);


  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "data-science", label: "Data Science", count: projects.filter(p => p.category === "data-science").length },
    { id: "ml-ai", label: "ML & AI", count: projects.filter(p => p.category === "ml-ai").length },
    { id: "web-development", label: "Web Development", count: projects.filter(p => p.category === "web-development").length },
    { id: "mobile-development", label: "Mobile Development", count: projects.filter(p => p.category === "mobile-development").length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of data science experiments, machine learning models, and full-stack 
            applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {/* {featuredProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )} */}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-slate-200"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-600">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs md:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.label}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800">
                      {category.count}
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              {isLoading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array(6).fill(0).map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                      <CardContent className="p-6">
                        <div className="h-4 bg-slate-200 rounded mb-4"></div>
                        <div className="h-3 bg-slate-200 rounded mb-2"></div>
                        <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.projectId}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">No projects found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
