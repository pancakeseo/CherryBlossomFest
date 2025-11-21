import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import { motion } from "framer-motion";
import plantingImg from "@assets/generated_images/community_planting_cherry_trees.png";
import blossomImg from "@assets/generated_images/close_up_artistic_blossom.png";
import teamImg from "@assets/generated_images/festival_organizers_team.png";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-pink-200 selection:text-pink-900 pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${blossomImg})` }}
          >
            <div className="absolute inset-0 bg-pink-900/30" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 font-heading font-bold uppercase tracking-widest text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl mb-6 drop-shadow-lg"
            >
              Rooted in Community
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-light"
            >
              The Abbotsford Cherry Blossom Festival is a celebration of nature, art, and the people who make our city bloom.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl text-gray-900 mb-6">More Than Just Petals</h2>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Inspired by the breathtaking canopies that line our streets every spring, the Abbotsford Cherry Blossom Festival began as a grassroots initiative to bring people together outdoors after the long winter months.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                What started as a small picnic has grown into a city-wide celebration of arts, culture, and environmental stewardship. We believe that the simple act of admiring a flower can be a powerful catalyst for community connection.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-pink-200 rounded-2xl" />
              <img 
                src={plantingImg} 
                alt="Community planting trees" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover aspect-video" 
              />
            </div>
          </div>
        </section>

        <Separator className="max-w-6xl mx-auto bg-pink-100" />

        {/* Values Section */}
        <section className="py-24 px-4 bg-pink-50/50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 font-heading uppercase tracking-widest">The roots of our festival</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Community", text: "We create spaces where neighbours become friends and diverse cultures find common ground." },
              { title: "Sustainability", text: "We are committed to protecting our urban forest and promoting eco-friendly practices." },
              { title: "Creativity", text: "We champion local artists, musicians, and performers who bring vibrancy to our city." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow text-center">
                <h3 className="font-display text-2xl text-pink-600 mb-4">{value.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-pink-100 rounded-2xl" />
              <img 
                src={teamImg} 
                alt="Festival Organizers" 
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover aspect-video" 
              />
            </div>
            <div>
              <h2 className="font-display text-4xl text-gray-900 mb-6">Meet the Team</h2>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                The festival is organized by a dedicated board of volunteers, local business owners, and community leaders who share a passion for Abbotsford.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                From logistics to landscaping, marketing to music curation, every aspect of the festival is a labour of love. We are always looking for new voices to join our planning committee.
              </p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}
