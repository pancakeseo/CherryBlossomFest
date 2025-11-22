import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePageMeta } from "@/hooks/use-page-meta";

import concertImg from "@assets/generated_images/outdoor_acoustic_concert.webp";
import walkImg from "@assets/generated_images/guided_nature_walk.webp";
import workshopImg from "@assets/generated_images/art_workshop_outdoors.webp";
import lanternImg from "@assets/generated_images/lantern_festival_night.webp";
import marketImg from "@assets/generated_images/sakura_market_scene.webp";
import picnicImg from "@assets/generated_images/picnic_under_blossom_trees.webp";

const events = [
  {
    id: 1,
    title: "The Big Blossom Picnic",
    date: "March 28, 2026",
    time: "11:00 AM - 4:00 PM",
    location: "Mill Lake Park",
    category: "Community",
    image: picnicImg,
    description: "Bring your blanket and basket for an afternoon of music, food, and petals under the trees. Featuring local food trucks and live acoustic performances.",
    featured: true
  },
  {
    id: 2,
    title: "Blossoms After Dark",
    date: "April 10-12, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Civic Plaza",
    category: "Night",
    image: lanternImg,
    description: "A magical illuminated walk through the cherry corridors. Experience the bloom in a new light with lantern installations and projection mapping.",
    featured: true
  },
  {
    id: 3,
    title: "Abbotsford Sakura Market",
    date: "April 4-5, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Jubilee Park",
    category: "Market",
    image: marketImg,
    description: "Shop local artisans, taste seasonal treats, and enjoy cultural performances. Over 50 vendors showcasing handmade goods.",
    featured: false
  },
  {
    id: 4,
    title: "Tree Talks & Guided Walks",
    date: "Every Weekend",
    time: "2:00 PM - 3:30 PM",
    location: "Various Locations",
    category: "Educational",
    image: walkImg,
    description: "Learn about the different cultivars and history of Abbotsford's urban forest from certified arborists.",
    featured: false
  },
  {
    id: 5,
    title: "Plein Air Painting Workshop",
    date: "April 8, 2026",
    time: "1:00 PM - 4:00 PM",
    location: "Gardner Park",
    category: "Art",
    image: workshopImg,
    description: "Join local artist Sarah Jenkins for an outdoor painting session capturing the ephemeral beauty of the blossoms.",
    featured: false
  },
  {
    id: 6,
    title: "Sunset Acoustic Sessions",
    date: "April 15, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Mill Lake Amphitheatre",
    category: "Music",
    image: concertImg,
    description: "Wind down your day with soulful tunes from local musicians as the sun sets over the cherry trees.",
    featured: false
  }
];

export default function Events() {
  usePageMeta({
    title: "2026 Festival Events",
    description: "Browse all events at the 2026 Abbotsford Cherry Blossom Festival including picnics, night walks, markets, concerts, workshops, and guided tours through the cherry blossoms.",
    canonicalPath: "/events",
  });

  return (
    <div className="min-h-screen bg-background font-sans pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-pink-500 font-heading font-bold uppercase tracking-widest text-sm">2026 Schedule</span>
              <h1 className="font-display text-5xl md:text-6xl mt-2 text-gray-900">Festival Events</h1>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Input placeholder="Search events..." className="pl-4 border-gray-200 rounded-lg" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] border-gray-200 rounded-lg">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="border-gray-200 rounded-lg">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Featured Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {events.filter(e => e.featured).map((event) => (
              <div key={event.id} className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[16/10]">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-pink-500 hover:bg-pink-600 text-white border-none">Featured</Badge>
                    <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md">{event.category}</Badge>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-2">{event.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-200 mb-4 font-heading">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                  </div>
                  <p className="text-gray-300 line-clamp-2 mb-4 md:w-3/4">{event.description}</p>
                  <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* All Events List */}
          <h3 className="font-display text-3xl mb-8 text-gray-800">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(e => !e.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 backdrop-blur text-pink-600 hover:bg-white">{event.category}</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-pink-500 font-bold text-sm mb-2 uppercase tracking-wider">{event.date}</div>
                  <h3 className="font-display text-xl text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" /> {event.location}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {event.description}
                  </p>
                  <Button variant="outline" className="w-full rounded-lg border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700">
                    More Info
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
