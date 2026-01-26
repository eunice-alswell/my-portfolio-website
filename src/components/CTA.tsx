import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "./ui/button"

export default function CTA() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Have a project in mind? I'd love to help bring your ideas to life through 
              data-driven insights and innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={"/contact"}>
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg hover-lift bg-white text-blue-600 hover:bg-white/90">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Me
                </Button>
              </Link>
              <a href = "https://www.linkedin.com/in/eunice-alswell-gyau/" target="_blank">
                <Button size="lg" className="px-8 py-4 text-lg bg-linear-to-r from-blue-600 to-purple-600 hover-lift border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  <Github className="mr-2 w-5 h-5" />
                  View GitHub
                </Button>
              </a>
              <a href = "https://www.linkedin.com/in/eunice-alswell-gyau/" target="_blank">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift bg-white text-blue-600 hover:bg-white/90">
                    <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
  )
}
