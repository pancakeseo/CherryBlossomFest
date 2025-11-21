import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Info, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

import mapImage from "@assets/generated_images/illustrated_city_map_with_cherry_blossoms.png";

// Mock Data for Locations
const locations = [
  {
    id: 1,
    name: "Mill Lake Park",
    status: "Full Bloom",
    type: "Park",
    description: "The crown jewel of Abbotsford's blossom season. A 2km loop around the lake lined with Akebono trees.",
    coords: { top: "40%", left: "50%" },
    trees: "Akebono, Yoshino",
    amenities: ["Parking", "Washrooms", "Picnic Area"]
  },
  {
    id: 2,
    name: "Civic Plaza",
    status: "Early Bloom",
    type: "Urban",
    description: "A modern urban setting where the contrast of concrete and soft pink petals creates perfect photo ops.",
    coords: { top: "60%", left: "30%" },
    trees: "Kanzan",
    amenities: ["Accessible", "Near Transit"]
  },
  {
    id: 3,
    name: "Gardner Park",
    status: "Post-Bloom",
    type: "Park",
    description: "A quieter spot perfect for painting and peaceful walks. The petals are currently falling, creating a pink carpet.",
    coords: { top: "25%", left: "70%" },
    trees: "Shirofugen",
    amenities: ["Playground", "Trails"]
  },
  {
    id: 4,
    name: "Downes Road Corridor",
    status: "Full Bloom",
    type: "Scenic Drive",
    description: "One of the most spectacular driving routes in the valley. A tunnel of pink that stretches for kilometers.",
    coords: { top: "15%", left: "40%" },
    trees: "Akebono",
    amenities: ["Scenic View"]
  },
  {
    id: 5,
    name: "Exhibition Park",
    status: "Early Bloom",
    type: "Park",
    description: "Home to the annual sports tournaments and a beautiful grove of young cherry trees.",
    coords: { top: "70%", left: "60%" },
    trees: "Yoshino",
    amenities: ["Parking", "Sports Fields"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Full Bloom": return "bg-pink-500";
    case "Early Bloom": return "bg-green-500";
    case "Post-Bloom": return "bg-orange-400";
    default: return "bg-gray-400";
  }
};

export default function BlossomMap() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen bg-background font-sans flex flex-col overflow-hidden">
      <Navbar />
      
      <div className="flex-grow flex flex-col md:flex-row relative pt-[72px] h-full">
        
        {/* Sidebar / List View */}
        <div className="w-full md:w-[400px] bg-white shadow-xl z-20 flex flex-col h-full border-r border-gray-200">
          <div className="p-6 border-b border-gray-100">
            <h1 className="font-display text-2xl text-gray-900 mb-2">Blossom Map</h1>
            <p className="text-sm text-gray-500 mb-4">Real-time bloom status updates</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Find a location..." 
                className="pl-10 bg-gray-50 border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <ScrollArea className="flex-grow">
            <div className="p-4 space-y-3">
              {filteredLocations.map((loc) => (
                <div 
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 ${
                    selectedLocation?.id === loc.id 
                      ? "bg-pink-50 border-pink-200 shadow-sm" 
                      : "bg-white border-gray-100 hover:border-pink-100 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-gray-800">{loc.name}</h3>
                    <Badge className={`${getStatusColor(loc.status)} text-white border-none text-[10px]`}>
                      {loc.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2">{loc.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3 h-3" /> {loc.type}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Map View */}
        <div className="flex-grow relative bg-[#eef2f5] overflow-hidden">
          {/* Map Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-auto flex items-center justify-center bg-[#eef2f5]">
            <div className="relative min-w-[1000px] min-h-[800px] w-full h-full">
              <img 
                src={mapImage} 
                alt="Abbotsford Blossom Map" 
                className="w-full h-full object-cover opacity-90"
              />
              
              {/* Interactive Pins */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  className="absolute group"
                  style={{ top: loc.coords.top, left: loc.coords.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(loc.status)} animate-ping absolute opacity-75`} />
                    <div className={`w-8 h-8 rounded-full ${getStatusColor(loc.status)} border-4 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 ${selectedLocation?.id === loc.id ? 'scale-125' : ''}`}>
                       <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs font-bold text-gray-700">
                      {loc.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Detail Card Overlay / Desktop Floating Card */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-30"
              >
                <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-md">
                  <CardHeader className="flex flex-row items-start justify-between pb-2">
                    <div>
                      <CardTitle className="text-xl font-display text-gray-900">{selectedLocation.name}</CardTitle>
                      <p className="text-sm text-pink-500 font-medium mt-1">{selectedLocation.trees} Trees</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedLocation(null)} className="h-8 w-8 -mr-2 -mt-2">
                      <X className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                       <Badge className={`${getStatusColor(selectedLocation.status)} text-white border-none mb-3`}>
                        {selectedLocation.status}
                      </Badge>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedLocation.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedLocation.amenities.map((amenity, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white">
                        <Navigation className="w-4 h-4 mr-2" /> Directions
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Info className="w-4 h-4 mr-2" /> Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm border border-gray-200 hidden md:block">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">Bloom Status</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-pink-500" /> Full Bloom
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-green-500" /> Early Bloom
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-orange-400" /> Post-Bloom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
