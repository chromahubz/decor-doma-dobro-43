export interface ProductColor {
  name: string;
  code: string;
  images: string[];
  available: boolean;
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
  available: boolean;
}

// Import all product images
import artdeco1 from "@/assets/artdeco-1.jpg";
import artdeco2 from "@/assets/artdeco-2.jpg";
import artdeco3 from "@/assets/artdeco-3.jpg";
import artdeco4 from "@/assets/artdeco-4.jpg";
import artdeco5 from "@/assets/artdeco-5.jpg";
import artdeco6 from "@/assets/artdeco-6.jpg";
import artdeco7 from "@/assets/artdeco-7.jpg";
import artdeco8 from "@/assets/artdeco-8.jpg";
import artdeco9 from "@/assets/artdeco-9.jpg";

import honey1 from "@/assets/honey-1.jpg";
import honey2 from "@/assets/honey-2.jpg";
import honey3 from "@/assets/honey-3.jpg";
import honey4 from "@/assets/honey-4.jpg";
import honey5 from "@/assets/honey-5.jpg";
import honey6 from "@/assets/honey-6.jpg";
import honey7 from "@/assets/honey-7.jpg";
import honey8 from "@/assets/honey-8.jpg";
import honey9 from "@/assets/honey-9.jpg";

import hydroponic1 from "@/assets/hydroponic-1.jpg";
import hydroponic2 from "@/assets/hydroponic-2.jpg";
import hydroponic3 from "@/assets/hydroponic-3.jpg";
import hydroponic4 from "@/assets/hydroponic-4.jpg";
import hydroponic5 from "@/assets/hydroponic-5.jpg";
import hydroponic6 from "@/assets/hydroponic-6.jpg";

import zen1 from "@/assets/zen-1.jpg";
import zen2 from "@/assets/zen-2.jpg";
import zen3 from "@/assets/zen-3.jpg";
import zen4 from "@/assets/zen-4.jpg";
import zen5 from "@/assets/zen-5.jpg";
import zen6 from "@/assets/zen-6.jpg";
import zen7 from "@/assets/zen-7.jpg";
import zen8 from "@/assets/zen-8.jpg";
import zen9 from "@/assets/zen-9.jpg";
import zen10 from "@/assets/zen-10.jpg";

import zenpot1 from "@/assets/zenpot-1.jpg";
import zenpot2 from "@/assets/zenpot-2.jpg";
import zenpot3 from "@/assets/zenpot-3.jpg";
import zenpot4 from "@/assets/zenpot-4.jpg";
import zenpot5 from "@/assets/zenpot-5.jpg";

import baghook1 from "@/assets/baghook-1.jpg";
import baghook2 from "@/assets/baghook-2.jpg";
import baghook3 from "@/assets/baghook-3.jpg";
import baghook4 from "@/assets/baghook-4.jpg";
import baghook5 from "@/assets/baghook-5.jpg";
import baghook6 from "@/assets/baghook-6.jpg";
import baghook7 from "@/assets/baghook-7.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Vaza Art Deco",
    slug: "vaza-art-deco",
    price: 5200,
    mainImage: artdeco1,
    description: "Elegantna Art Deco vaza sa geometrijskim uzorkom koji odiše luksuzom i sofisticiranošću.",
    longDescription: "Ova prelepa Art Deco vaza predstavlja savršen spoj klasične elegancije i moderne funkcionalnosti. Inspirisana zlatnim dobom dizajna 1920-ih, vaza odlikuje se karakterističnim geometrijskim uzorcima koji stvaraju igru svetla i senke. Izrađena od visokokvalitetne keramike sa preciznošću koja se očekuje od proizvoda tog doba. Svaki detalj je pažljivo oblikovan da odražava autentičnost Art Deco stila.",
    colors: [
      {
        name: "Bela",
        code: "white",
        images: [artdeco1, artdeco2, artdeco3, artdeco4, artdeco5, artdeco6, artdeco7, artdeco8, artdeco9],
        available: true
      },
      {
        name: "Crna",
        code: "black",
        images: [artdeco1],
        available: false
      },
      {
        name: "Zlatna",
        code: "gold",
        images: [artdeco1],
        available: false
      }
    ],
    features: [
      "Autentičan Art Deco dizajn",
      "Geometrijski uzorci",
      "Visokokvalitetna keramika",
      "Ručno završena"
    ],
    dimensions: "Visina: 30cm, Širina: 15cm",
    material: "Keramika sa mat završetkom",
    available: true
  },
  {
    id: 2,
    name: "Vaza Honey",
    slug: "vaza-honey",
    price: 4800,
    mainImage: honey1,
    description: "Jedinstven honey dizajn koji podseća na prirodne saćaste strukture pčela.",
    longDescription: "Inspirisana prirodnim saćastim strukturama, ova vaza donosi organsku teksturu i prirodnu lepotu u vaš dom. Honeycomb pattern nije samo estetski privlačan već i funkcionalan - tekstura omogućava bolju stabilnost i zanimljiv vizuelni efekat pod različitim uglovima svetla. Idealna za moderne interijere koji cene prirodne motive i geometrijske forme.",
    colors: [
      {
        name: "Bela",
        code: "white", 
        images: [honey1, honey2, honey3, honey4, honey5, honey6, honey7, honey8, honey9],
        available: true
      },
      {
        name: "Prirodna",
        code: "natural",
        images: [honey1],
        available: false
      },
      {
        name: "Zlatna",
        code: "gold",
        images: [honey1],
        available: false
      }
    ],
    features: [
      "Honeycomb tekstura",
      "Prirodni motivi",
      "Moderna geometrija",
      "Jedinstvena površina"
    ],
    dimensions: "Visina: 25cm, Širina: 20cm",
    material: "Keramika sa teksturiranom površinom",
    available: true
  },
  {
    id: 3,
    name: "Hidroponik Tower",
    slug: "hidroponik-tower",
    price: 8900,
    mainImage: hydroponic3,
    description: "Moderni hidroponski toranj za gajenje biljaka bez zemlje.",
    longDescription: "Revolucionarni pristup gajenju biljaka u zatvorenom prostoru. Ovaj hidroponski toranj omogućava gajenje svežeg povrća i začina direktno u vašoj kuhinji ili dnevnoj sobi. Sistem automatski kontroliše hranjenje biljaka kroz vodeni rastvor bogat hranjivim materijama. Kompaktan dizajn čini ga idealnim za male prostore, dok moderna estetika čini da se savršeno uklopi u bilo koji savremeni enterijer.",
    colors: [
      {
        name: "Bela",
        code: "white",
        images: [hydroponic1, hydroponic2, hydroponic3, hydroponic4, hydroponic5, hydroponic6],
        available: true
      },
      {
        name: "Crna",
        code: "black",
        images: [hydroponic1],
        available: false
      }
    ],
    features: [
      "Automatski sistem",
      "Bez zemlje",
      "LED osvetljenje",
      "Kompaktan dizajn"
    ],
    dimensions: "Visina: 80cm, Širina: 30cm",
    material: "ABS plastika i metalne komponente",
    available: false
  },
  {
    id: 4,
    name: "Japanska Zen Bašta",
    slug: "japanska-zen-basta",
    price: 6700,
    mainImage: zen7,
    description: "Miniaturna zen bašta za meditaciju i opuštanje duha. Savršen poklonački set za ljubitelje istočne filozofije.",
    longDescription: "Inspirisana tradicionalnim japanskim zen baštama, ova miniaturna verzija donosi mir i harmoniju u vaš lični prostor. Set uključuje pažljivo odabrane kamenje, pesak specijalne granulacije i drveni greben za stvaranje uzoraka. Zen bašta je odličan alat za meditaciju, smanjenje stresa i fokusiranje uma. Svaki element je odabran prema tradicionalnim principima feng shui-ja i zen filozofije.",
    colors: [
      {
        name: "Prirodna",
        code: "natural",
        images: [zen1, zen2, zen3, zen4, zen5, zen6, zen7, zen8, zen9, zen10],
        available: true
      },
      {
        name: "Tamna",
        code: "dark",
        images: [zen1],
        available: false
      }
    ],
    features: [
      "Tradicionalni dizajn",
      "Meditacijski alat",
      "Kompletni set",
      "Ručno biran kamen"
    ],
    dimensions: "Dužina: 40cm, Širina: 25cm",
    material: "Prirodno drvo i kamen",
    available: true
  },
  {
    id: 5,
    name: "Japanska Zen Bašta sa Saksijom",
    slug: "japanska-zen-basta-saksija",
    price: 8200,
    mainImage: zenpot1,
    description: "Zen bašta kombinovana sa prostorom za biljke - savršen balans prirode.",
    longDescription: "Ova jedinstvena kreacija kombinuje mir zen bašte sa životom biljaka. Deo je rezervisan za tradicionalnu zen baštu sa peskom i kamenom, dok drugi deo omogućava gajenje malih biljaka ili sukulenata. Ovaj hibridni pristup stvara kompletnu mikro-prirodu na vašem stolu ili polici. Idealno za one koji žele da kombinuju aktivan biljni svet sa kontemplativnim aspektom zen kulture.",
    colors: [
      {
        name: "Prirodna",
        code: "natural",
        images: [zenpot1, zenpot2, zenpot3, zenpot4, zenpot5],
        available: true
      },
      {
        name: "Bela",
        code: "white",
        images: [zenpot1],
        available: false
      }
    ],
    features: [
      "Kombinovana funkcionalnost",
      "Zen bašta + saksija",
      "Kompletni ekosistem",
      "Premium materijali"
    ],
    dimensions: "Dužina: 50cm, Širina: 30cm",
    material: "Bambus i prirodno drvo",
    available: true
  },
  {
    id: 6,
    name: "Držač Za Ranac",
    slug: "drzac-za-ranac",
    price: 2400,
    mainImage: baghook3,
    description: "Elegantni zidni držač za rančeve i torbe sa modernim dizajnom.",
    longDescription: "Funkcionalni i estetski držač za rančeve koji rešava problem organizacije ulaznog prostora. Dizajniran je da podnese značajan teret dok zadržava elegantan izgled. Moderna linija čini ga pogodnim za bilo koji enterijer - od industrijskih do skandinavskih stilova. Lako se montira na zid i dolazi sa svim potrebnim elementima za instalaciju.",
    colors: [
      {
        name: "Bela",
        code: "white",
        images: [baghook1, baghook2, baghook3, baghook4, baghook5, baghook6, baghook7],
        available: true
      },
      {
        name: "Crna",
        code: "black", 
        images: [baghook1],
        available: false
      },
      {
        name: "Drvena",
        code: "wood",
        images: [baghook1],
        available: false
      }
    ],
    features: [
      "Nosivost do 15kg",
      "Laka montaža",
      "Moderni dizajn",
      "Kompaktan oblik"
    ],
    dimensions: "Dužina: 15cm, Širina: 5cm",
    material: "Metalno jezgro sa polimernim premazom",
    available: true
  }
];