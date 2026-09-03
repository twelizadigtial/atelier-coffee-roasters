export interface SignatureDrink {
  id: number;
  name: string;
  desc: string;
  priceShort: string;
  priceTall: string;
  color: string;
  accentColor: string;
  layer1Img: string;
  layer2Img: string;
  layer2ImgMobile?: string;
  cupImg: string;
  cupScale?: number;
  cupOffsetY?: number;
  cupOffsetYMobile?: number;
}

export const SIGNATURE_DRINKS: SignatureDrink[] = [
  {
    id: 1,
    name: "GOLDEN MILK",
    desc: "A smooth blend of milk with notes of almond and saffron, known for its rich aroma and golden hue.",
    priceShort: "$ 5.50",
    priceTall: "$ 6.30",
    color: "#fbd158",
    accentColor: "#E5B242",
    layer1Img: "/assets/Golden Solid BG-V4RmzAJh.webp",
    layer2Img: "/assets/Golden BG element-DjFPrUi6.webp",
    layer2ImgMobile: "/assets/Golden Milk BG Element Mobile-5QhOLxFQ.webp",
    cupImg: "/assets/Golden milk-B6kdDFOY.webp",
    cupScale: 1.1,
    cupOffsetY: 30,
    cupOffsetYMobile: -15,
  },
  {
    id: 2,
    name: "PISTACHIO MILK",
    desc: "Velvety milk blended with pistachios, creating a rich nutty flavor with smooth depth.",
    priceShort: "$ 5.75",
    priceTall: "$ 6.55",
    color: "#a4ce8f",
    accentColor: "#A3B685",
    layer1Img: "/assets/Pista Solid BG-CZ-yPIKj.webp",
    layer2Img: "/assets/Pista BG element-jRd9ZlPL.webp",
    layer2ImgMobile: "/assets/Pista Milk BG Element Mobile-D3RpFRXx.webp",
    cupImg: "/assets/Pista milk-D1hT_nqJ.webp",
    cupScale: 1,
    cupOffsetY: 0,
  },
  {
    id: 3,
    name: "ROSE MILK",
    desc: "Milk infused with rose, offering a soft floral aroma and delicate sweetness.",
    priceShort: "$ 5.75",
    priceTall: "$ 6.55",
    color: "#de68b0",
    accentColor: "#D68E9B",
    layer1Img: "/assets/Rose Solid BG-slS4laLz.webp",
    layer2Img: "/assets/Rose BG element-na4EC57Q.webp",
    layer2ImgMobile: "/assets/Rose Milk BG Element Mobile-N3PvGGsf.webp",
    cupImg: "/assets/Rose Milk-BMDQU9uj.webp",
    cupScale: 1,
    cupOffsetY: 0,
  },
  {
    id: 4,
    name: "CHOCOLATE MILK",
    desc: "Creamy milk blended with cocoa for a deep chocolate flavor and smooth texture.",
    priceShort: "$ 5.25",
    priceTall: "$ 6.05",
    color: "#83a9c9",
    accentColor: "#7A584A",
    layer1Img: "/assets/Chocolate Solid BG--wag3Wlz.webp",
    layer2Img: "/assets/Chocolate BG element-DVacJWed.webp",
    layer2ImgMobile: "/assets/choco Milk BG Element Mobile-6zrLxT1b.webp",
    cupImg: "/assets/choco Milk-BVhlzhBW.webp",
    cupScale: 1,
    cupOffsetY: 0,
  },
  {
    id: 5,
    name: "BUTTERSCOTCH MILK",
    desc: "Milk blended with butterscotch for a rich buttery sweetness with caramel notes.",
    priceShort: "$ 5.25",
    priceTall: "$ 6.05",
    color: "#cf9754",
    accentColor: "#D79F4F",
    layer1Img: "/assets/Butter Solid BG-CwoyCXKU.webp",
    layer2Img: "/assets/Butter BG element-B9SEfOm5.webp",
    layer2ImgMobile: "/assets/Butter BG Element Mobile-BNw8_54b.webp",
    cupImg: "/assets/Butterscotch Mik-B0gCLF24.webp",
    cupScale: 1,
    cupOffsetY: 0,
  },
];

export const ADD_ONS_DATA = {
  milkChoices: [
    { name: "Whole milk", price: "---" },
    { name: "Soy Milk", price: "+$0.50" },
    { name: "Almond Milk", price: "+$0.50" },
  ],
  boosters: [
    { name: "Single Espresso Shot", price: "+$1.75" },
    { name: "Double Espresso Shot", price: "+$2.50" },
    { name: "Matcha", price: "+$2.75" },
  ],
  bakery: [
    { name: "Chocolate Chip Cookie", price: "$1.50" },
    { name: "Stroopwafel", price: "$1.75" },
    { name: "Butter Croissant", price: "$2.50" },
    { name: "Pain au Chocolat", price: "$2.75" },
  ],
};
