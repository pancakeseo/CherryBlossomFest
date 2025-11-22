import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

import watercolorImg from "@assets/generated_images/watercolor_cherry_blossoms.webp";
import aerialImg from "@assets/generated_images/aerial_park_view.webp";
import childImg from "@assets/generated_images/child_playing_with_petals.webp";
import lanternImg from "@assets/generated_images/lantern_festival_night.webp";
import blossomCloseUp from "@assets/generated_images/close_up_artistic_blossom.webp";
import picnicImg from "@assets/generated_images/picnic_under_blossom_trees.webp";
import marketImg from "@assets/generated_images/sakura_market_scene.webp";
import concertImg from "@assets/generated_images/outdoor_acoustic_concert.webp";

const categories = ["All", "Nature", "Community", "Art", "Night"];

const galleryItems = [
  { id: 1, src: aerialImg, category: "Nature", title: "Canopy from Above" },
  { id: 2, src: lanternImg, category: "Night", title: "Lanterns Aglow" },
  { id: 3, src: childImg, category: "Community", title: "Pure Joy" },
  { id: 4, src: watercolorImg, category: "Art", title: "Petal Study No. 5" },
  { id: 5, src: blossomCloseUp, category: "Nature", title: "Macro Bloom" },
  { id: 6, src: picnicImg, category: "Community", title: "Friends & Flowers" },
  { id: 7, src: marketImg, category: "Community", title: "Market Days" },
  { id: 8, src: concertImg, category: "Community", title: "Music in the Park" },
  { id: 9, src: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800", category: "Nature", title: "Morning Dew" },
  { id: 10, src: "https://images.unsplash.com/photo-1502086223501-681a6a8048e3?auto=format&fit=crop&q=80&w=800", category: "Art", title: "Painter's Perspective" },
  { id: 11, src: "https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=800", category: "Nature", title: "Pink Pathway" },
];

export default function Gallery() {
  usePageMeta({
    title: "Photo Gallery",
    description: "Explore stunning photos from past Abbotsford Cherry Blossom Festivals. View images of blooming trees, community events, night walks, and joyous moments shared under the blossoms.",
    canonicalPath: "/gallery",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-sans pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-500 font-heading font-bold uppercase tracking-widest text-sm"
            >
              Captured Moments
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl mt-2 mb-6 text-gray-900"
            >
              Festival Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg font-light"
            >
              Explore the vibrant colors and joyous moments from past festivals. 
              Tag us @AbbotsfordBlossom to be featured.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 ${
                  activeCategory === category 
                    ? "bg-pink-500 hover:bg-pink-600 text-white border-transparent" 
                    : "border-pink-200 text-gray-600 hover:border-pink-400 hover:text-pink-500"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[3/4] bg-gray-100"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                    <h3 className="text-white font-display text-xl">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0 flex items-center justify-center h-screen">
          {selectedImage && (
            <div className="relative w-full max-h-[90vh] flex items-center justify-center">
               {/* Close button specifically for the image view */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
              >
                <X className="w-8 h-8" />
                <span className="sr-only">Close</span>
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery preview" 
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
