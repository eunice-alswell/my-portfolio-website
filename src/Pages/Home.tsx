import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import EunicePhoto from "../assets/Eunice-Alswell-Gyua-image-2.jpg";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EuniceImage from "../assets/Eunice-Alswell-Gyau-image-1.jpg";
import { WhatIDo } from "../lib/Content";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectPreviews  } from "../lib/api"
import ProjectCard from "@/components/ProjectCard";
import type { ProjectPreviewProps } from "../lib/types";
import CTA from "@/components/CTA";

export default function Home() {
    // const projects = getprojectPreviews();
    const [featuredProjects, setFeaturedProjects] = useState<ProjectPreviewProps[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);

    // const projects = async () => {
    //     const data = await getprojectPreviews();
    //     const featured = data.filter( (project) => project.featured );
    //     setFeaturedProjects(featured);
    //     setIsLoading(false);
    //     return featured;
    // }

    useEffect( () => {
        const loadFeaturedProjects = async () => {
            try{
                const data = await getProjectPreviews();
                const featured = data.filter( (project) => project.featured );
                setFeaturedProjects(featured);
            }
            catch (error) {
                console.error("Error fetching featured projects:", error);
            }
            finally {
                setIsLoading(false);
            }
        }
        loadFeaturedProjects();
    }, []);

    return (
        <div className="min-h-screen overflow-hidden">
            <section id="hero-section" className="relative overflow-hidden py-20 lg:py-32">
                <div className= "absolute inset-0 bg-linear-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{opacity: 0, x: 0.8}}
                            animate={{opacity: 1, x: 1}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="relative order-2"
                        >
                            <div className="relative lg:w-full h-[680px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
                                <img 
                                src={EunicePhoto}
                                alt="Eunice Alswell Gyau - Data Scientist & Developer"
                                className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 to-purple-600/10"></div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-green-400 to-blue-500 rounded-2xl opacity-60 blur-xl"></div>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, x: 40}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="order-1 text-center lg:text-left space-y-8"
                        >
                            <div className="space-y-4">
                                <div className="inline-block">
                                    <span className="text-blue-600 font-semibold text-lg">Hi, I'm</span>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                    <span className="text-gradient">Eunice Alswell Gyau</span>
                                </h1>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700">
                                    Data Scientist & Full-Stack Developer
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed">
                                    I turn data into insights and build software that supports better decisions.
                                    My focus is on clarity, thoughtful systems, and real-world impact. 
                                    {/* ...<a href="/about" className="text-blue-600 hover:text-blue-800">read more</a> */}
                                </p>
                            </div> 
                            
                            <div className="flex justify-center lg:justify-start flex-wrap gap-4">
                                <Button 
                                    size="lg" 
                                    className="bg-linear-to-r from-blue-600 to-violet-600 hover:border-2 hover:border-blue-800 hover:bg-white text-white px-8 py-4 text-lg hover-lift"
                                >
                                    <Download className="mr-2 w-5 h-5" />
                                    Download CV
                                </Button>
                                <Link to={"/projects"}>
                                    <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift border-2">
                                        View My Projects
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link> 
                            </div> 
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className="py-10 lg:py-20 bg-blue-50/30">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-2 items-center">
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="w-full max-w-md mx-auto hidden lg:block"
                        >
                            <img 
                                src={EuniceImage} 
                                alt="Eunice Alswell Gyau - Data Scientist & Developer" 
                                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl hover-lift"
                            />
                            {/* <div className="bg-url(src\assets\Eunice-Alswell-Gyau-image-1.jpg)"></div> */}
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="text-center lg:text-left space-y-6"
                        >
                            {/* About Section Content Here */}
                            <h2 className="text-3xl font-bold mb-4">About Me</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                I’m a data analyst with over three years of experience working with data to support decision-making, alongside freelance software development work.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                I enjoy building systems that combine data, software, and clear thinking — focusing on solutions that are practical, ethical, and useful in real-world settings.
                            </p>
                            <div className="mt-6">
                                <Link to={"/about"}>
                                    <Button size="lg" variant="outline" className="bg-linear-to-r from-blue-600 to-violet-600 hover:border-2 hover:border-blue-800 hover:bg-white text-white px-8 py-4 text-lg hover-lift">
                                        Learn More About Me
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {WhatIDo.map((item, index) => (
                                <motion.div
                                    initial={{opacity: 0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.2 + index * 0.2}} 
                                    key={index} 
                                >
                                    <Card className="h-full bg-linear-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                        <CardContent className="p-8 text-center">
                                            <div className={`mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br ${item.color} text-white`}>
                                            <item.icon className="icon" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500  leading-relaxed">
                                            {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>   
            </section>
            {/* Project section */}
            <section id="projects" className="py-10 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        A selection of projects that showcase my skills in data science and software development.
                    </p>
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        {isLoading ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array(3).fill(0).map((_, i) => (
                                <Card key={i} className="animate-pulse">
                                <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                                <div className="p-6">
                                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                                    <div className="h-3 bg-slate-200 rounded mb-2"></div>
                                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                                </div>
                                </Card>
                            ))}
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {featuredProjects.map( (project) => (
                                        <ProjectCard
                                            key={project.projectId}
                                            project={project}
                                            featured={project.featured ? "TRUE" : "FALSE"}
                                        />
                                    ))
                                    }
                                </div>
                                 <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-center mt-12"
                                >
                                    <Link to={"/projects"}>
                                    <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift border-2">
                                        View All Projects
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </motion.div>  
                </div>
            </section>
            {/* Call to Action section */}
            <section id="cta" className="py-10 lg:py-20 bg-blue-50/30">
                <CTA />
            </section>
        </div>
   )
}
