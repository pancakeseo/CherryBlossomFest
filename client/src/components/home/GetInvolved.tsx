import { Heart, Users, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function GetInvolved() {
  const cards = [
    {
      title: "Volunteer",
      icon: Heart,
      text: "Join our team of blossom enthusiasts and help make the festival happen.",
      cta: "Join the Team",
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Sponsor the Festival",
      icon: Users,
      text: "Connect your brand with our community and support local culture.",
      cta: "Become a Sponsor",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Vendor or Performer",
      icon: Music,
      text: "Showcase your talent or products at our Sakura Market and events.",
      cta: "Apply Now",
      color: "bg-blue-50 text-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl text-gray-900 mb-4">Get Involved</h2>
        <p className="text-gray-500 font-body max-w-2xl mx-auto">
          The festival is built by the community, for the community. Here's how you can be part of the magic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 flex flex-col items-center text-center h-full">
              <div className={`w-16 h-16 rounded-full ${card.color} flex items-center justify-center mb-6`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl mb-3 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 font-body mb-8 flex-grow">{card.text}</p>
              <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 hover:text-gray-900 w-full">
                {card.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
