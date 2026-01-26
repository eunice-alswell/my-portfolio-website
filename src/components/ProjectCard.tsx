import {Card, CardContent, CardHeader} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { categoryColors } from "../lib/Content";
import type {ProjectPreviewProps } from "../lib/types";
import { Calendar, ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import { format } from "date-fns";


export default function ProjectCard({
    project, 
    featured = "FALSE"
}: {
    project: ProjectPreviewProps, 
    featured?: string
}) {
  return (
    <Card className={`group hover-lift glass-effect border-0 h-full relative overflow-hidden ${featured ? 'shadow-lg shadow-blue-200' : ''}`}>
        {featured === "TRUE" && (
            <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                </Badge>
            </div>
        )}
        {/* Project image */}
        <Link to={`ProjectDetail?id=${project.projectId}`} className="group">
            <div className="relative h-48 overflow-hidden cursor-pointer">
            {project.image_url ? (
                <img 
                src={project.image_url} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            ) : (
                <div className={`w-full h-full bg-linear-to-br ${categoryColors[project.category]} opacity-80 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">
                    {project.title.split(' ').map((word: string) => word[0]).join('').slice(0, 2)}
                </span>
                </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </Link>
        <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-2 mb-2">
                <Badge 
                    variant="secondary"
                    className={`mb-2 bg-linear-to-r ${categoryColors[project.category]} text-white`}>
                    {project.category}
                </Badge>
                {project.completion_date && (
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(project.completion_date), 'MM yyyy')}
                    </div>
                )} 
            </div>
            <Link to={`ProjectDetail?id=${project.projectId}`} className="hover:underline">
                <p className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                    {project.title}
                </p>
            </Link>  
        </CardHeader>
        <CardContent className="pt-0 flex flex-col h-full">
            <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                {project.description}
            </p>
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map( (tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-white/50">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-sm text-slate-500 ml-2">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                )}
            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto">
                <Link to={`ProjectDetail?id=${project.projectId}`} className="flex-1">
                    <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                        <ArrowRight className="w-4 h-4 mr-1" />
                        Read More
                    </Button>
                </Link>
                {project.github_url && (
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-slate-50"
                        onClick={() => window.open(project.github_url, '_blank')}
                    >
                    <Github className="w-4 h-4" />
                    </Button>
                )}
                {project.demo_url && (
                    <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-slate-50"
                    onClick={() => window.open(project.demo_url, '_blank')}
                    >
                    <ExternalLink className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </CardContent>
    </Card>
  )
}
