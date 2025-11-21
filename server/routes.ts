import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const result = insertNewsletterSubscriberSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: fromError(result.error).toString() 
        });
      }

      // Check if email already exists
      const existing = await storage.getNewsletterSubscriberByEmail(result.data.email);
      if (existing) {
        return res.status(409).json({ 
          error: "This email is already subscribed to our newsletter." 
        });
      }

      const subscriber = await storage.createNewsletterSubscriber(result.data);
      
      res.status(201).json({ 
        success: true,
        message: "Successfully subscribed to the newsletter!",
        subscriber: {
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt
        }
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ 
        error: "Failed to subscribe. Please try again later." 
      });
    }
  });

  // Get all subscribers (admin endpoint - could add auth later)
  app.get("/api/newsletter/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json({ subscribers });
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
