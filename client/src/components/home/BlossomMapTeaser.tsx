import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import petalTexture from "@assets/generated_images/soft_petal_texture_background.webp";

export function BlossomMapTeaser() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-pink-50">
       {/* Background Texture */}
       <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${petalTexture})`, backgroundSize: '300px' }}
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 rounded-3xl bg-white p-8 md:p-12 shadow-xl">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm">
            <MapPin className="w-4 h-4" /> Interactive Map
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900">Find Cherry Blossoms Near You</h2>
          <p className="font-body text-lg text-gray-600 leading-relaxed">
            Discover the best viewing spots across Abbotsford. Our real-time blossom map shows you exactly where the trees are blooming, from the early pinks of the Akebono to the late white Shirofugen.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-gray-600 font-heading text-sm font-medium pt-4">
            <li className="flex items-center gap-2">🌸 Blossom Hotspots</li>
            <li className="flex items-center gap-2">📸 Photo-worthy Spots</li>
            <li className="flex items-center gap-2">♿ Accessible Paths</li>
            <li className="flex items-center gap-2">📅 Bloom Timing</li>
          </ul>
          <div className="pt-6">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-pink-200 transition-all">
              Launch Blossom Map
            </Button>
          </div>
        </div>
        
        <div className="flex-1 w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative group">
          {/* Mock Map UI */}
          <div className="absolute inset-0 bg-sky-50">
            {/* Mock Roads */}
            <div className="absolute top-0 left-1/4 w-2 h-full bg-white" />
            <div className="absolute top-1/3 left-0 w-full h-2 bg-white" />
            <div className="absolute top-2/3 left-0 w-full h-2 bg-white" />
            
            {/* Mock Parks */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-50" />
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-100 rounded-full opacity-50" />
            
            {/* Mock Pins */}
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce duration-[2000ms]">
              <MapPin className="w-8 h-8 text-pink-500 drop-shadow-md" fill="currentColor" />
            </div>
            <div className="absolute top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce delay-700 duration-[2500ms]">
              <MapPin className="w-8 h-8 text-pink-400 drop-shadow-md" fill="currentColor" />
            </div>
            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce delay-300 duration-[2200ms]">
              <MapPin className="w-8 h-8 text-pink-600 drop-shadow-md" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-gray-500">
            Live Bloom Status
          </div>
        </div>
      </div>
    </section>
  );
}
