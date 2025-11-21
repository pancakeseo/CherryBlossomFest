import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Map, Calendar, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className={`font-display font-bold text-xl ${scrolled ? "text-pink-600" : "text-white"}`}>
            <Link href="/">ACBF</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Events", path: "/events" },
              { name: "Map", path: "/map" },
              { name: "Gallery", path: "/gallery" },
              { name: "About", path: "/about" }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`font-heading text-sm font-medium hover:text-pink-400 transition-colors ${scrolled ? "text-gray-600" : "text-white/90"}`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className={`rounded-full px-6 ${scrolled ? "bg-pink-500 text-white hover:bg-pink-600" : "bg-white text-pink-600 hover:bg-white/90"}`}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 py-3 flex justify-between items-center text-xs font-medium text-gray-500">
        <a href="#" className="flex flex-col items-center gap-1 text-pink-500">
          <Home className="w-5 h-5" />
          Home
        </a>
        <a href="#" className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
          <Calendar className="w-5 h-5" />
          Events
        </a>
        <a href="/map" className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
          <Map className="w-5 h-5" />
          Map
        </a>
        <a href="#" className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
          <Menu className="w-5 h-5" />
          Menu
        </a>
      </nav>
    </>
  );
}
