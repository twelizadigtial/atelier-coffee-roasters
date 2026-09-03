export interface GalleryImage {
  id: string;
  title: string;
  category: "Café Interior" | "Latte Art" | "Brewing Process" | "Pastries";
  image: string;
  aspect: "square" | "tall" | "wide";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Artisanal Espresso Extraction",
    category: "Brewing Process",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    aspect: "square",
  },
  {
    id: "gal-2",
    title: "Rosetta Latte Art Precision",
    category: "Latte Art",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    aspect: "tall",
  },
  {
    id: "gal-3",
    title: "Midtown Roastery Lounge",
    category: "Café Interior",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    aspect: "wide",
  },
  {
    id: "gal-4",
    title: "Single-Origin Green Beans",
    category: "Brewing Process",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    aspect: "square",
  },
  {
    id: "gal-5",
    title: "Morning Pastry Counter Display",
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    aspect: "tall",
  },
  {
    id: "gal-6",
    title: "Hand Pour-Over Chemex Ritual",
    category: "Brewing Process",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    aspect: "square",
  },
];
