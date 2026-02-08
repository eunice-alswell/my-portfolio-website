import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Calendar,
  Send,
  Github,
  Linkedin,
  // Twitter,
  Coffee,
  MessageCircle,
  Briefcase,
  Instagram,
  PhoneCall,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eunicealswelltech@gmail.com",
      href: "mailto:eunicealswelltech@gmail.com"
    },
    {
      icon: PhoneCall,
      label: "Phone",
      value: "+233547470406",
      href: "tel:+233547470406"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Accra, Ghana",
      href: null
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for new projects, job opportunities, and collaborations",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/eunice-alswell",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/eunice-alswell-gyau/",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/eunicealswell/",
      color: "hover:text-blue-400"
    },
    {
      icon: BookOpen,
      label: "Medium",
      href: "https://medium.com/@eunicealswell",
      color: "hover:text-yellow-500"
    }
  ];

  const projectTypes = [
    { value: "mobile-dev", label: "Mobile App Development" },
    { value: "web-dev", label: "Web Application" },
    { value: "data-science", label: "Data Science Consulting" },
    { value: "ml-ai", label: "ML/AI Development" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "other", label: "Other" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your data science or development project to life? 
            I'd love to hear about your challenges and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 hover-lift">
                <CardHeader className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">Contact Information</h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-medium text-slate-800 hover:text-blue-600 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-slate-800">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 hover-lift">
                <CardHeader className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">Follow Me</h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:scale-110 transition-all ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 hover-lift bg-linear-to-br from-green-50 to-teal-50">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Quick Response</h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    Need a faster response? Schedule a quick 15-minute call to discuss your project.
                  </p>
                  <a href="https://calendar.app.google/enbGFdeit5pRKt7S6" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-green-200 hover:bg-green-50">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 hover-lift">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-slate-800">Services</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-2">
                    {[
                      "Data Science Consulting",
                      "ML Model Development", 
                      "Full-Stack Web Apps",
                      "Mobile App Development",
                      "Technical Writing",
                      "Code Review & Mentoring"
                    ].map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-slate-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 hover-lift">
                <CardHeader className="p-8 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-slate-800">Send a Message</h2>
                  </div>
                  <p className="text-slate-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Type Selection */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-3 block">
                        What type of project are you interested in?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => handleInputChange('projectType', type.value)}
                            className={`p-3 rounded-lg border-2 transition-all text-left hover:border-blue-300 ${
                              formData.projectType === type.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {/* <div className="text-lg mb-1">{type.icon}</div> */}
                            <div className="text-sm font-medium text-slate-800">{type.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Your Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="bg-white/80"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="bg-white/80"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Subject *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Brief description of your project"
                        required
                        className="bg-white/80"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me more about your project, timeline, and requirements..."
                        rows={6}
                        required
                        className="bg-white/80"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
