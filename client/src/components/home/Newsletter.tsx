import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 px-4 bg-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="max-w-xl mx-auto text-center relative z-10">
        <Mail className="w-10 h-10 mx-auto mb-6 text-pink-300" />
        <h2 className="font-display text-3xl md:text-4xl mb-4">Stay in Full Bloom</h2>
        <p className="font-body text-pink-100 mb-8 text-lg">
          Get bloom forecasts, event announcements, and festival updates sent straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus-visible:ring-pink-300"
          />
          <Button className="bg-pink-500 hover:bg-pink-400 text-white h-12 px-8 rounded-lg font-bold shadow-lg">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-pink-300 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
