import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import picnicImg from "@assets/generated_images/picnic_under_blossom_trees.webp";
import marketImg from "@assets/generated_images/sakura_market_scene.webp";
import nightImg from "@assets/generated_images/night_blossom_walk.webp";
import bikeImg from "@assets/generated_images/blossom_bike_ride.webp";
// kids_art_zone.webp not available, using placeholder
const kidsArtImg = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800";

export function FeaturedEvents() {
  const events = [
    {
      title: "The Big Blossom Picnic",
      date: "March 28, 2026",
      image: picnicImg,
      description: "Bring your blanket and basket for an afternoon of music, food, and petals under the trees."
    },
    {
      title: "Abbotsford Sakura Market",
      date: "April 4-5, 2026",
      image: marketImg,
      description: "Shop local artisans, taste seasonal treats, and enjoy cultural performances."
    },
    {
      title: "Blossoms After Dark",
      date: "April 10-12, 2026",
      image: nightImg,
      description: "A magical illuminated walk through the cherry corridors. Experience the bloom in a new light."
    },
    {
      title: "Tree Talks & Guided Walks",
      date: "Every Weekend",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800",
      description: "Learn about the different cultivars and history of Abbotsford's urban forest."
    },
    {
      title: "Blossom Bike Ride",
      date: "April 18, 2026",
      image: bikeImg,
      description: "A scenic community ride through the most pink-petaled routes in the city."
    },
    {
      title: "Kids Blossom Art Zone",
      date: "Family Day Special",
      image: kidsArtImg,
      description: "Crafts, face painting, and creativity for the little ones."
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">What's On</h2>
        <p className="text-gray-500 font-heading uppercase tracking-widest">Feature Events 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl bg-white">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-heading text-sm font-bold uppercase tracking-wider mb-1 bg-pink-500/90 inline-block px-2 py-1 rounded-md backdrop-blur-sm">{event.date}</p>
              </div>
            </div>
            <CardHeader>
              <h3 className="font-display text-2xl text-gray-800 group-hover:text-pink-600 transition-colors">{event.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-body leading-relaxed">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 text-pink-500 hover:text-pink-600 hover:bg-transparent font-heading font-semibold group-hover:translate-x-1 transition-transform">
                Event Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
