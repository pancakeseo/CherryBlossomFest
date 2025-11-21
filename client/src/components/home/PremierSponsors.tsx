import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Building2 } from "lucide-react";

export function PremierSponsors() {
  const sponsors = [
    {
      title: "Top Mortgage Broker",
      icon: Trophy,
      subtext: "Recognizing outstanding support for our community.",
      color: "text-pink-500"
    },
    {
      title: "Top Community Partner",
      icon: Heart,
      subtext: "Strengthening Abbotsford through generosity and collaboration.",
      color: "text-green-600"
    },
    {
      title: "Top Cultural Contributor",
      icon: Building2,
      subtext: "Honouring those uplifting local arts and culture.",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="relative -mt-20 z-10 px-4 max-w-7xl mx-auto pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <Card key={index} className="bg-white/95 backdrop-blur-sm border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <sponsor.icon className={`w-8 h-8 ${sponsor.color}`} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-gray-800">{sponsor.title}</h3>
              <p className="text-gray-600 font-body leading-relaxed">{sponsor.subtext}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm font-heading uppercase tracking-widest text-gray-400">Presented by Our Premier Sponsors</p>
      </div>
    </section>
  );
}
