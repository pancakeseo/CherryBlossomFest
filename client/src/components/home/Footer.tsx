import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-pink-100 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-gray-900 mb-6">Abbotsford <br/> Cherry Blossom <br/> Festival</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Discover</h4>
            <ul className="space-y-3 font-body text-gray-600">
              <li><a href="#" className="hover:text-pink-500 transition-colors">About the Festival</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Event Schedule</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Blossom Map</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Community</h4>
            <ul className="space-y-3 font-body text-gray-600">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Vendors</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Land Acknowledgement</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We respectfully acknowledge that the Abbotsford Cherry Blossom Festival takes place on the traditional and unceded territory of the Stó:lō people, the Semá:th First Nation and Mathxwí First Nation.
            </p>
          </div>
        </div>
        
        <Separator className="bg-pink-100 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Abbotsford Cherry Blossom Festival. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
