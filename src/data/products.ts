export interface ProductColor {
  name: string;
  code: string;
  images: string[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  mainImage: string;
  description: string;
  longDescription: string;
  colors: ProductColor[];
  features: string[];
  dimensions: string;
  material: string;
}

// Import all product images
import product1 from "@/assets/product1.jpg";
import product1White from "@/assets/product1-white.jpg";
import product1Black from "@/assets/product1-black.jpg";
import product2 from "@/assets/product2.jpg";
import product2White from "@/assets/product2-white.jpg";
import product2Black from "@/assets/product2-black.jpg";
import product3 from "@/assets/product3.jpg";
import product3Beige from "@/assets/product3-beige.jpg";
import product3Green from "@/assets/product3-green.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Elegantna Vaza sa Pampas Travom",
    slug: "elegantna-vaza-pampas-trava",
    price: 4500,
    mainImage: product1,
    description: "Moderna keramička vaza u zemljanim tonovima sa sušenom pampas travom.",
    longDescription: "Ova elegantna keramička vaza predstavlja savršen spoj moderne estetike i prirodne lepote. Izrađena je od visokokvalitetne keramike koja prolazi kroz pažljiv proces pečenja na visokoj temperaturi, što joj garantuje trajnost i otpornost. Vaza dolazi sa pampas travom koja je prirodno osušena i tretirana da zadrži svoju boju i oblik tokom godina. Idealna je za moderne domove koji žele da unesu dašak prirode u svoj enterijer.",
    colors: [
      {
        name: "Zemljane boje",
        code: "terracotta",
        images: [product1, product1, product1]
      },
      {
        name: "Bela",
        code: "white",
        images: [product1White, product1White, product1White]
      },
      {
        name: "Crna",
        code: "black",
        images: [product1Black, product1Black, product1Black]
      }
    ],
    features: [
      "Ručno izrađena keramika",
      "Uključuje pampas travu",
      "Otporna na UV zrake",
      "Lako za održavanje"
    ],
    dimensions: "Visina: 35cm, Širina: 12cm",
    material: "Visokokvalitetna keramika"
  },
  {
    id: 2,
    name: "Geometrijska Saksija za Biljke",
    slug: "geometrijska-saksija-biljke",
    price: 3200,
    mainImage: product2,
    description: "Moderna geometrijska saksija idealna za sukulente i male biljke.",
    longDescription: "Dizajnirana za ljubitelje minimalizma i moderne arhitekture, ova geometrijska saksija donosi čist i elegantan izgled vašem prostoru. Njena jedinstvena forma kombinuje funkcionalnost sa estetskim izgledom, dok savršene proporcije čine da se uklopi u bilo koji enterijer. Saksija ima odličnu drenažu koja omogućava zdravlje biljaka, a njena stabilna osnova garantuje sigurnost.",
    colors: [
      {
        name: "Sage zelena",
        code: "sage",
        images: [product2, product2, product2]
      },
      {
        name: "Bela",
        code: "white",
        images: [product2White, product2White, product2White]
      },
      {
        name: "Crna",
        code: "black",
        images: [product2Black, product2Black, product2Black]
      }
    ],
    features: [
      "Savršena drenaža",
      "Geometrijski dizajn",
      "Stabilna osnova",
      "Idealna za sukulente"
    ],
    dimensions: "Visina: 15cm, Širina: 18cm",
    material: "Keramika sa mat završetkom"
  },
  {
    id: 3,
    name: "Dekorativna Figurina Ptica",
    slug: "dekorativna-figurina-ptica",
    price: 2800,
    mainImage: product3,
    description: "Ručno izrađena keramička figurina u minimalističkom stilu.",
    longDescription: "Ova prelepa figurina ptice je ručno modelovana od strane iskusnih zanatlija, gde svaki komad nosi jedinstvene karakteristike. Inspirisana skandinavskim dizajnom, figurina predstavlja savršen balans između jednostavnosti i elegancije. Njena glatka površina i pažljivo oblikovane linije čine je idealnim dekorom za moderne domove koji cene kvalitet i autentičnost.",
    colors: [
      {
        name: "Prirodna glina",
        code: "natural",
        images: [product3, product3, product3]
      },
      {
        name: "Bež",
        code: "beige",
        images: [product3Beige, product3Beige, product3Beige]
      },
      {
        name: "Sage zelena",
        code: "sage",
        images: [product3Green, product3Green, product3Green]
      }
    ],
    features: [
      "Ručno modelovana",
      "Jedinstveni komad",
      "Skandinavski dizajn",
      "Glatka mat površina"
    ],
    dimensions: "Visina: 12cm, Dužina: 8cm",
    material: "Prirodna glina sa glazurom"
  },
  {
    id: 4,
    name: "Pletena Korpa Saksija",
    slug: "pletena-korpa-saksija",
    price: 3800,
    mainImage: product4,
    description: "Prirodna pletena korpa perfect za vaše zelene ljubimce.",
    longDescription: "Tradicionalno pletenje kombinovano sa modernim dizajnom stvara ovu izuzetnu korpu saksiju. Izrađena od prirodnih materijala koji su ekolološki prihvatljivi, ova korpa donosi toplinu i teksturu u vaš dom. Njena čvrsta konstrukcija omogućava dugotrajan život, dok prirodni materijali omogućavaju biljkama da 'dišu' i razvijaju se u zdravom okruženju.",
    colors: [
      {
        name: "Prirodna",
        code: "natural",
        images: [product4, product4, product4]
      }
    ],
    features: [
      "Tradicionalno pletenje",
      "Ekološki materijali",
      "Omogućava disanje biljaka",
      "Čvrsta konstrukcija"
    ],
    dimensions: "Visina: 25cm, Širina: 30cm",
    material: "Prirodna trska i pamuk"
  },
  {
    id: 5,
    name: "Set od Tri Male Vaze",
    slug: "set-tri-male-vaze",
    price: 5200,
    mainImage: product5,
    description: "Elegantni set malih vaza u različitim zemljanim tonovima.",
    longDescription: "Ovaj harmonični set od tri vaze različitih veličina omogućava kreativno aranžiranje prostora. Svaka vaza je pažljivo oblikovana da se savršeno slaže sa ostalima, dok različite veličine pružaju fleksibilnost u decorisanju. Zemljani tonovi se lako uklapaju u bilo koji enterijer, a kvalitetna izrada garantuje dugotrajnost i zadovoljstvo.",
    colors: [
      {
        name: "Zemljani mix",
        code: "earth-mix",
        images: [product5, product5, product5]
      }
    ],
    features: [
      "Set od tri vaze",
      "Različite veličine",
      "Harmonični dizajn",
      "Fleksibilno aranžiranje"
    ],
    dimensions: "Mala: 8cm, Srednja: 12cm, Velika: 16cm",
    material: "Keramika u zemljanim tonovima"
  },
  {
    id: 6,
    name: "Drveni Dekorativni Tray",
    slug: "drveni-dekorativni-tray",
    price: 4100,
    mainImage: product6,
    description: "Ručno izrađen drveni tray sa prirodnim teksturama.",
    longDescription: "Ovaj prelepi drveni tray je izrađen od pažljivo odabranog drveta koje prohodi kroz prirodan proces sušenja. Svaki tray nosi jedinstvene karakteristike drveta - teksturu, boju i prirodne linije koje čine svaki komad posebnim. Idealan je za serviranje, dekoraciju ili organizaciju manjih predmeta, donoseći toplinu prirodnog materijala u vaš dom.",
    colors: [
      {
        name: "Prirodno drvo",
        code: "natural-wood",
        images: [product6, product6, product6]
      }
    ],
    features: [
      "Ručno izrađen",
      "Prirodne teksture",
      "Multifunkcionalan",
      "Jedinstveni komad"
    ],
    dimensions: "Dužina: 40cm, Širina: 25cm, Visina: 3cm",
    material: "Masivno drvo sa prirodnim uljem"
  }
];