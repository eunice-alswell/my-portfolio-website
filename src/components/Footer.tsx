import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="block lg:flex items-center justify-center text-2xl font-bold text-gradient mb-4">
            <Link to="/">Logo</Link>
            <span className="mx-2 hidden lg:inline">|</span>
            <p className="mx-2">Eunice Alswell Gyau</p>
          </div>
          <p className="text-slate-400 mb-6">
            Data Scientist & Developer | Transforming data into insights, ideas into applications
          </p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <span>© 2026 Eunice Alswell Gyau. All rights reserved</span>
            <span>•</span>
            <span>Built with passion for data & code</span>
          </div>
        </div>
    </footer>
  )
}
