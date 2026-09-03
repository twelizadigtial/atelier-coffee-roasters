export interface CoffeeItem {
  id: string;
  name: string;
  category:
    | "Espresso"
    | "Americano"
    | "Cappuccino"
    | "Latte"
    | "Mocha"
    | "Cold Coffee"
    | "Specialty Coffee"
    | "Tea"
    | "Pastries"
    | "Desserts";
  desc: string;
  priceShort: string;
  priceTall: string;
  origin?: string;
  roastLevel?: "Light" | "Medium" | "Dark";
  popular?: boolean;
  image: string;
}

export const SIGNATURE_COFFEES = [
  {
    id: "sig-1",
    name: "GOLDEN SAFFRON LATTE",
    desc: "A velvety espresso creation infused with wild Iranian saffron, sweet almond milk, and raw wildflower honey.",
    priceShort: "$ 6.50",
    priceTall: "$ 7.25",
    color: "#FAF3EA",
    cardBg: "#FFFFFF",
    textColor: "#1F1512",
    accentColor: "#C88A58",
    badgeTag: "Signature House Blend",
    drinkImg: "/assets/Golden milk-B6kdDFOY.webp",
    bgElementImg: "/assets/Golden BG element-DjFPrUi6.webp",
  },
  {
    id: "sig-2",
    name: "PISTACHIO PRALINE MOCHA",
    desc: "Single-origin espresso blended with roasted Sicilian pistachio paste, dark cocoa, and steamed oat milk.",
    priceShort: "$ 6.75",
    priceTall: "$ 7.50",
    color: "#F5ECE1",
    cardBg: "#FFFFFF",
    textColor: "#1F1512",
    accentColor: "#7A584A",
    badgeTag: "Artisanal Roast",
    drinkImg: "/assets/Pista milk-D1hT_nqJ.webp",
    bgElementImg: "/assets/Pista BG element-jRd9ZlPL.webp",
  },
  {
    id: "sig-3",
    name: "ROSE BLOSSOM COLD BREW",
    desc: "Slow-steeped 24-hour Ethiopian Yirgacheffe cold brew infused with organic Damask rosewater and cold foam.",
    priceShort: "$ 6.50",
    priceTall: "$ 7.25",
    color: "#FDFBF7",
    cardBg: "#FFFFFF",
    textColor: "#1F1512",
    accentColor: "#C88A58",
    badgeTag: "Seasonal Special",
    drinkImg: "/assets/Rose Milk-BMDQU9uj.webp",
    bgElementImg: "/assets/Rose BG element-na4EC57Q.webp",
  },
  {
    id: "sig-4",
    name: "DUTCH CACAO ESPRESSO",
    desc: "Double espresso poured over melted 70% Dutch dark chocolate ganache, finished with cocoa nibs.",
    priceShort: "$ 5.75",
    priceTall: "$ 6.50",
    color: "#1F1512",
    cardBg: "#2A1D18",
    textColor: "#FDFBF7",
    accentColor: "#D4AF37",
    badgeTag: "Single-Origin Dark",
    drinkImg: "/assets/choco Milk-BVhlzhBW.webp",
    bgElementImg: "/assets/Chocolate BG element-DVacJWed.webp",
  },
  {
    id: "sig-5",
    name: "CARAMEL BUTTERSCOTCH DRAFT",
    desc: "Nitrogen-infused cold brew layered with house caramelised butterscotch cream and smoked sea salt.",
    priceShort: "$ 6.25",
    priceTall: "$ 7.00",
    color: "#FAF3EA",
    cardBg: "#FFFFFF",
    textColor: "#1F1512",
    accentColor: "#C88A58",
    badgeTag: "Draft Speciality",
    drinkImg: "/assets/Butterscotch Mik-B0gCLF24.webp",
    bgElementImg: "/assets/Butter BG element-B9SEfOm5.webp",
  },
];

export const FULL_MENU_ITEMS: CoffeeItem[] = [
  // Espresso
  {
    id: "esp-1",
    name: "Single-Origin Espresso",
    category: "Espresso",
    desc: "Rich 18g double shot extracted from Ethiopian Guji heirloom beans. Bright notes of bergamot and jasmine.",
    priceShort: "$ 3.75",
    priceTall: "$ 4.50",
    origin: "Ethiopia Guji",
    roastLevel: "Light",
    popular: true,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "esp-2",
    name: "Espresso Macchiato",
    category: "Espresso",
    desc: "Double espresso shot stained with a spoon of silky micro-textured whole milk foam.",
    priceShort: "$ 4.25",
    priceTall: "$ 4.95",
    origin: "Colombia Huila",
    roastLevel: "Medium",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
  },

  // Americano
  {
    id: "ame-1",
    name: "Classic Caffe Americano",
    category: "Americano",
    desc: "Double shot of espresso diluted with filtered hot spring water. Crisp flavor with chocolate undertones.",
    priceShort: "$ 4.50",
    priceTall: "$ 5.25",
    origin: "Guatemala Antigua",
    roastLevel: "Medium",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ame-2",
    name: "Iced Long Black",
    category: "Americano",
    desc: "Espresso extracted directly over chilled mineral water and clear ice spheres for preserved crematology.",
    priceShort: "$ 4.75",
    priceTall: "$ 5.50",
    origin: "Kenya Nyeri",
    roastLevel: "Light",
    popular: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
  },

  // Cappuccino
  {
    id: "cap-1",
    name: "Traditional Cappuccino",
    category: "Cappuccino",
    desc: "Equal thirds of espresso, steamed milk, and dense velvety milk foam dusted with Dutch cocoa powder.",
    priceShort: "$ 5.25",
    priceTall: "$ 6.00",
    origin: "Brazil Santos",
    roastLevel: "Medium",
    popular: true,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
  },

  // Latte
  {
    id: "lat-1",
    name: "Caffe Latte",
    category: "Latte",
    desc: "Rich espresso combined with steamed oat or whole milk, topped with intricate poured rosette latte art.",
    priceShort: "$ 5.50",
    priceTall: "$ 6.25",
    origin: "Guatemala Antigua",
    roastLevel: "Medium",
    popular: true,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "lat-2",
    name: "Madagascar Vanilla Latte",
    category: "Latte",
    desc: "Espresso, steamed milk, and house-infused Madagascar bourbon vanilla bean syrup.",
    priceShort: "$ 6.00",
    priceTall: "$ 6.75",
    origin: "Colombia Huila",
    roastLevel: "Medium",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
  },

  // Mocha
  {
    id: "moc-1",
    name: "Single-Origin Dark Mocha",
    category: "Mocha",
    desc: "Espresso combined with melted 72% Valrhona dark chocolate and micro-foamed milk.",
    priceShort: "$ 6.25",
    priceTall: "$ 7.00",
    origin: "Costa Rica Tarrazu",
    roastLevel: "Dark",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80",
  },

  // Cold Coffee
  {
    id: "cld-1",
    name: "Nitro Cold Brew",
    category: "Cold Coffee",
    desc: "24-hour steep coffee infused with pure nitrogen gas for a cascading, creamy Guinness-like head.",
    priceShort: "$ 5.95",
    priceTall: "$ 6.75",
    origin: "Ethiopia Yirgacheffe",
    roastLevel: "Light",
    popular: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cld-2",
    name: "Vanilla Bean Cold Foam Brew",
    category: "Cold Coffee",
    desc: "Slow-steeped cold brew topped with whipped vanilla sweet cream cold foam.",
    priceShort: "$ 6.25",
    priceTall: "$ 6.95",
    origin: "Guatemala Antigua",
    roastLevel: "Medium",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
  },

  // Specialty Coffee
  {
    id: "spc-1",
    name: "Spanish Cortado",
    category: "Specialty Coffee",
    desc: "Equal parts ristretto espresso and warm textured milk to cut the acidity without overwhelming complexity.",
    priceShort: "$ 4.75",
    priceTall: "$ 5.50",
    origin: "Ethiopia Guji",
    roastLevel: "Light",
    popular: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "spc-2",
    name: "Affogato al Caffe",
    category: "Specialty Coffee",
    desc: "Hot double espresso poured directly over a scoop of artisanal Madagascar vanilla bean gelato.",
    priceShort: "$ 6.50",
    priceTall: "$ 7.25",
    origin: "Brazil Santos",
    roastLevel: "Dark",
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=600&q=80",
  },

  // Tea
  {
    id: "tea-1",
    name: "Kyoto Uji Matcha Latte",
    category: "Tea",
    desc: "Ceremonial grade Uji matcha whisked with bamboo chasen and folded into velvety steamed oat milk.",
    priceShort: "$ 6.25",
    priceTall: "$ 7.00",
    popular: true,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
  },

  // Pastries
  {
    id: "pas-1",
    name: "Artisanal Butter Croissant",
    category: "Pastries",
    desc: "Flaky 81-layer French butter croissant baked fresh every morning at 6 AM.",
    priceShort: "$ 4.50",
    priceTall: "$ 4.50",
    popular: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pas-2",
    name: "Pain au Chocolat",
    category: "Pastries",
    desc: "Laminated puff pastry filled with two batons of 64% Valrhona dark chocolate.",
    priceShort: "$ 5.25",
    priceTall: "$ 5.25",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80",
  },

  // Desserts
  {
    id: "des-1",
    name: "Espresso Tiramisu",
    category: "Desserts",
    desc: "Savoiardi ladyfingers soaked in our signature cold brew, layered with mascarpone cream & cocoa.",
    priceShort: "$ 7.50",
    priceTall: "$ 7.50",
    popular: true,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "des-2",
    name: "Pistachio Basque Cheesecake",
    category: "Desserts",
    desc: "Crustless caramelized Basque cheesecake infused with Bronte pistachio paste.",
    priceShort: "$ 8.25",
    priceTall: "$ 8.25",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
  },
];

export const ADD_ONS_DATA = {
  milkChoices: [
    { name: "Whole Milk", price: "Included" },
    { name: "Organic Oat Milk", price: "+$0.75" },
    { name: "Almond Milk", price: "+$0.75" },
    { name: "Coconut Milk", price: "+$0.75" },
  ],
  boosters: [
    { name: "Extra Espresso Shot", price: "+$1.75" },
    { name: "Madagascar Vanilla Syrup", price: "+$0.75" },
    { name: "Hazelnut Praline Syrup", price: "+$0.75" },
    { name: "Salted Caramel Drizzle", price: "+$0.75" },
  ],
  bakery: [
    { name: "Butter Croissant", price: "$4.50" },
    { name: "Pain au Chocolat", price: "$5.25" },
    { name: "Stroopwafel", price: "$2.75" },
    { name: "Chocolate Chip Cookie", price: "$3.50" },
  ],
};
