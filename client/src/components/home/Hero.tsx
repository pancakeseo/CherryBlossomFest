import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_image_of_cherry_blossoms_in_abbotsford.webp";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
      </div>

      {/* Floating Petals Animation (Simplified CSS/Framer) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-200/80 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: -20, 
              opacity: 0 
            }}
            animate={{ 
              y: "100vh", 
              x: `calc(${Math.random() * 100}% + ${Math.random() * 200 - 100}px)`,
              opacity: [0, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg"
        >
          Abbotsford Mortgage Broker
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-lg md:text-2xl max-w-2xl mb-10 drop-shadow-md font-light tracking-wide"
        >
          Celebrating the beauty of blossoms and the heart of our community.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-none shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 rounded-full px-8 text-lg h-14">
            View 2026 Events
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20 hover:text-white shadow-lg rounded-full px-8 text-lg h-14">
            Find Blossoms Near You
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
