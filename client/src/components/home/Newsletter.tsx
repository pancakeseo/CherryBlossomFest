import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
      } else {
        toast({
          title: "Subscription failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-24 px-4 bg-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">You're All Set!</h2>
          <p className="font-body text-pink-100 text-lg">
            Thanks for subscribing. You'll receive bloom forecasts and festival updates straight to your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="max-w-xl mx-auto text-center relative z-10">
        <Mail className="w-10 h-10 mx-auto mb-6 text-pink-300" />
        <h2 className="font-display text-3xl md:text-4xl mb-4">Stay in Full Bloom</h2>
        <p className="font-body text-pink-100 mb-8 text-lg">
          Get bloom forecasts, event announcements, and festival updates sent straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus-visible:ring-pink-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            data-testid="input-newsletter-email"
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="bg-pink-500 hover:bg-pink-400 text-white h-12 px-8 rounded-lg font-bold shadow-lg"
            data-testid="button-newsletter-subscribe"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-xs text-pink-300 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
