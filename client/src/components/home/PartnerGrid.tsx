import { Card } from "@/components/ui/card";

export function PartnerGrid() {
  const partners = [
    "City of Abbotsford",
    "Tourism Abbotsford",
    "Abbotsford Arts Council",
    "Downtown Abbotsford",
    "Fraser Valley Regional Library",
    "University of the Fraser Valley",
    "Abbotsford Chamber of Commerce",
    "Local Business Assoc."
  ];

  return (
    <section className="py-16 px-4 bg-white border-y border-pink-50">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
          Community Partners
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 h-20 border border-dashed border-gray-200 rounded-lg hover:border-pink-200 hover:bg-pink-50/30 transition-colors group cursor-default">
              <span className="font-display font-bold text-lg text-gray-400 group-hover:text-pink-400 transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
