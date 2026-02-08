import { useState, useEffect } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2,
  Lightbulb,
  Target,
  Cpu,
  TrendingUp,
  Users,
  AlertCircle,
  Sparkles,
  Code,
  Layers
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { categoryColors, categoryLabels } from "@/lib/Content";
import { getProjectDetail } from "@/lib/api";
import type { ProjectDetailProps } from "@/lib/types";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id: projectId } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetailProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProject();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const loadProject = async () => {
    
    if (!projectId) {
      navigate("/projects");
      return;
    }

    try {
      const foundProject = await getProjectDetail(projectId);
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate("/projects");
      }
    } catch (error) {
      console.error("Error loading project:", error);
      navigate("/projects");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/projects">
            <Button variant="ghost" size="sm" className="hover:bg-white/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  className={`bg-linear-to-r ${categoryColors[project.category]} text-white border-0 text-sm`}
                >
                  {categoryLabels[project.category]}
                </Badge>
                {project.completion_date && (
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(project.completion_date), 'MMMM yyyy')}
                  </div>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demo_url && (
                  <Button 
                    size="lg"
                    className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(project.demo_url, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </Button>
                )}
                {project.github_url && (
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(project.github_url, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              {project.image_url ? (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              ) : (
                <div className={`w-full h-[400px] bg-linear-to-br ${categoryColors[project.category]} flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="glass-effect border-0 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-800">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-blue-50 text-blue-700 px-4 py-2 text-sm border border-blue-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.section>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Problem Statement */}
            {project.problem_statement && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">The Problem</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {project.problem_statement}
                    </p>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Solution Overview */}
            {project.solution_overview && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">The Solution</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {project.solution_overview}
                    </p>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Thinking Process */}
            {project.thinking_process && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Thinking Process</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="prose prose-slate max-w-none">
                      <ReactMarkdown>{project.thinking_process}</ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Architecture */}
            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">System Architecture</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="prose prose-slate max-w-none">
                      <ReactMarkdown>{project.architecture}</ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Challenges & Solutions</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-6">
                      {project.challenges.map((item, index) => (
                        <div key={index} className="border-l-4 border-orange-400 pl-6 py-2">
                          <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                            Challenge: {item.challenge}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            <span className="font-medium text-green-600">Solution:</span> {item.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg hover-lift">
                      <img 
                        src={image.image_url} 
                        alt={image.caption || `${project.title} screenshot ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-600" />
                      <h3 className="text-xl font-bold text-slate-800">Key Features</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Use Cases */}
            {project.useCases && project.useCases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-slate-800">Use Cases</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-3">
                      {project.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                          </div>
                          <span className="text-slate-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift bg-linear-to-br from-green-50 to-teal-50">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold text-slate-800">Results & Impact</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="bg-white/50 rounded-lg p-4">
                          <div className="text-sm text-slate-600 mb-1">{result.metric}</div>
                          <div className="text-2xl font-bold text-green-600">{result.value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Future Improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-0 hover-lift">
                  <CardHeader className="p-6 pb-4">
                    <h3 className="text-xl font-bold text-slate-800">Future Enhancements</h3>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-2">
                      {project.futureImprovements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="text-blue-600">▸</span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}