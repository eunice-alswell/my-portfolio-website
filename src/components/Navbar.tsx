import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Briefcase, Home, Mail, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

const navigationLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Me", path: "/about", icon: User},
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navigations = ({mobile=false, closeMenu=()=>{}}: {mobile?: boolean, closeMenu?: ()=>void}) => (
  <div className={`${mobile ? "flex flex-col space-y-4" : "hidden md:flex space-x-2"}`}>
    {navigationLinks.map((navigationLink) =>(
      <NavLink
        key={navigationLink.name}
        to={navigationLink.path}
        onClick={closeMenu}
        className={({isActive})=>
          `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
            isActive
            ? "bg-white/30 text-slate-800 font-medium"
            : "text-slate-600 hover:text-slate-800 hover:bg-white/20"
          }`
        }
      >
        {< navigationLink.icon className="w-4 h-4" />}
        {navigationLink.name}
      </NavLink>

    ))}
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <header className="fixed top-0 w-full z-50 glass-effect py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link to="/">Logo</Link>
          <div>
            <Navigations/>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="md:hidden p-2 rounded-md hover:bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <Navigations mobile={true} closeMenu={() => setIsMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
