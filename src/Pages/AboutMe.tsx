import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Award, Download, ExternalLink, Building2Icon, Book } from "lucide-react";
import { careerTimeline, certifications, skills, education} from "@/lib/Content";

export default function AboutMe() {
  return (
     <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A passionate technologist who loves solving complex problems through the perfect 
            blend of data science insights and robust software engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-effect border-0 hover-lift">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Hi! I’m a data analyst with over three years of experience and a freelance full-stack developer. 
                    My journey started with a curiosity about data and patterns, which gradually grew into an interest in 
                    building software that turns insights into useful, real-world tools.
                  </p>
                  <p>
                    I enjoy working at the intersection of data and software — analyzing information, building systems, 
                    and making complex ideas easier to understand and apply. I’m especially interested in creating solutions 
                    that balance solid technical foundations with practical, user-focused design.
                  </p>
                  <p>
                    When I'm not coding or analyzing data, you'll find me writing technical articles, exploring the latest advances in AI and 
                    machine learning or cooking for family or watching action movies. I’m motivated by curiosity, steady growth, and the desire to build things that genuinely make sense.
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Career Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Work Experience</h2>
              <div className="space-y-6">
                {careerTimeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        { (item.year.split("-")[1]) === " Present" ?
                          "Now"
                        : 
                          item.year.split("-")[1].split(" ")[2]
                        }
                      </div>
                      {index < careerTimeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-linear-to-b from-blue-200 to-purple-200 mt-4"></div>
                      )}
                    </div>
                    <Card className="flex-1 p-6 glass-effect border-0 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">{item.company}</span>
                      </div>
                      <p className="text-slate-600">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Book className="w-6 h-6" />
                      </div>
                      {index < education.length - 1 && (
                        <div className="w-0.5 h-16 bg-linear-to-b from-blue-200 to-purple-200 mt-4"></div>
                      )}
                    </div>
                    <Card className="flex-1 p-6 glass-effect border-0 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{item.degree}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Building2Icon className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">{item.institution}</span>
                      </div>
                      <p className="text-slate-600">{item.details}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-0 hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-slate-700 mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-0 hover-lift">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-xl font-bold text-slate-800">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-3 bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span className="text-slate-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-0 hover-lift text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Resume</h3>
                  <p className="text-slate-600">Download my full resume for detailed information</p>
                </div>
                <a href="https://drive.google.com/file/d/1USXhYE-YH-8WbweMBRB3X1QiOjh-2qaB/view?usp=sharing" download="Eunice-Alswell-Gyau-Resume.pdf">
                  <Button 
                    className="w-full bg-linear-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-effect border-0 hover-lift">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="https://github.com/eunice-alswell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                  <a href="https://www.linkedin.com/in/eunice-alswell-gyau/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://medium.com/@eunicealswell" target="_blank" rel="_blank" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Medium</span>
                  </a>
                  {/* <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Kaggle Profile</span>
                  </a> */}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
