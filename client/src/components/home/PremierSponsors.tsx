import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Heart, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremierSponsors() {
  const sponsors = [
    {
      title: "Abbotsford Mortgage Broker",
      icon: Trophy,
      description: "Abbotsford Mortgage Broker is a major contributor to the Abbotsford Cherry Blossom Festival and a trusted partner in our community.",
      color: "text-pink-500",
      descriptionLink: {
        text: "provide comprehensive mortgage and mortgage refinancing services",
        url: "https://www.brownemortgage.com/"
      },
      descriptionSuffix: " to Abbotsford residents, helping families achieve their homeownership dreams."
    },
    {
      title: "Greek Islands Restaurant",
      icon: Heart,
      description: "Greek Islands Restaurant brings authentic Mediterranean flavors and warmth to our community. As a ",
      color: "text-green-600",
      descriptionLink: {
        text: "steadfast supporter of local events,",
        url: "https://www.gilsands.com/"
      },
      descriptionSuffix: " they nourish both body and spirit while strengthening Abbotsford through generosity and collaboration."
    },
    {
      title: "First Page Marketing",
      icon: Building2,
      description: "First Page Marketing is dedicated to elevating local voices and amplifying community stories. They champion the arts and ",
      color: "text-purple-500",
      descriptionLink: {
        text: "culture of Abbotsford",
        url: "https://www.fpagemarketing.com/"
      },
      descriptionSuffix: " through strategic marketing support and creative vision."
    }
  ];

  return (
    <section className="relative -mt-20 z-10 px-4 max-w-7xl mx-auto pb-16">
      <div className="text-center mb-8">
        <p className="text-sm font-heading uppercase tracking-widest text-white/90 drop-shadow-md">Presented by Our Premier Sponsors</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <Card key={index} className="bg-white/95 backdrop-blur-sm border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <sponsor.icon className={`w-8 h-8 ${sponsor.color}`} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-gray-800">{sponsor.title}</h3>
              <p className="text-gray-600 font-body leading-relaxed mb-4">
                {sponsor.description}
                {sponsor.descriptionLink && (
                  <>
                    {" "}<a href={sponsor.descriptionLink.url} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-semibold underline">
                      {sponsor.descriptionLink.text}
                    </a>{sponsor.descriptionSuffix}
                  </>
                )}
              </p>
              {sponsor.link && (
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 p-0 h-auto font-semibold text-sm">
                    Visit Website <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
