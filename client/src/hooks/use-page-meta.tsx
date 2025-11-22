import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function usePageMeta({ title, description, canonicalPath = "", ogImage }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Abbotsford Cherry Blossom Festival`;
    document.title = fullTitle;

    const baseUrl = "https://abbotsfordblossomfest.com";
    const canonicalUrl = `${baseUrl}${canonicalPath}`;
    const defaultOgImage = `${baseUrl}/og-image.jpg`;
    const imageUrl = ogImage || defaultOgImage;

    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    return () => {
      document.title = "Abbotsford Cherry Blossom Festival 2026 | Spring Events & Bloom Map";
    };
  }, [title, description, canonicalPath, ogImage]);
}
