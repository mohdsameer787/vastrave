import traditional1_1 from "./productlisting/product1img1.webp"
import traditional1_2 from "./productlisting/product1img2.webp"
import traditional1_3 from "./productlisting/product1img3.webp"

import traditional2_1 from "./productlisting/product2img1.webp"
import traditional2_2 from "./productlisting/product2img2.webp"
import traditional2_3 from "./productlisting/product2img3.webp"

import traditional3_1 from "./productlisting/product3img1.webp"
import traditional3_2 from "./productlisting/product3img2.webp"
import traditional3_3 from "./productlisting/product3img3.webp"

import traditional4_1 from "./productlisting/product4img1.webp"
import traditional4_2 from "./productlisting/product4img2.webp"
import traditional4_3 from "./productlisting/product4img3.webp"


import traditional5_1 from "./productlisting/product5img1.webp"
import traditional5_2 from "./productlisting/product5img2.webp"
import traditional5_3 from "./productlisting/product5img3.webp"

import traditional6_1 from "./productlisting/product6img1.webp"
import traditional6_2 from "./productlisting/product6img2.webp"
import traditional6_3 from "./productlisting/product6img3.webp"

import traditional7_1 from "./productlisting/product7img1.webp"
import traditional7_2 from "./productlisting/product7img2.webp"
import traditional7_3 from "./productlisting/product7img3.webp"

import traditional8_1 from "./productlisting/product8img1.webp"
import traditional8_2 from "./productlisting/product8img2.webp"
import traditional8_3 from "./productlisting/product8img3.webp"

import traditional9_1 from "./productlisting/product9img1.webp"
import traditional9_2 from "./productlisting/product9img2.webp"
import traditional9_3 from "./productlisting/product9img3.webp"


import traditional10_1 from "./productlisting/product10img1.webp"
import traditional10_2 from "./productlisting/product10img2.webp"
import traditional10_3 from "./productlisting/product10img3.webp"


import traditional11_1 from "./productlisting/product11img1.webp"
import traditional11_2 from "./productlisting/product11img2.webp"
import traditional11_3 from "./productlisting/product11img3.webp"

import traditional12_1 from "./productlisting/product12img1.webp"
import traditional12_2 from "./productlisting/product12img2.webp"
import traditional12_3 from "./productlisting/product12img3.webp"

import traditional13_1 from "./productlisting/product13img1.webp"
import traditional13_2 from "./productlisting/product13img2.webp"
import traditional13_3 from "./productlisting/product13img3.webp"

import traditional14_1 from "./productlisting/product14img1.webp"
import traditional14_2 from "./productlisting/product14img2.webp"
import traditional14_3 from "./productlisting/product14img3.webp"


import traditional15_1 from "./productlisting/product15img1.webp"
import traditional15_2 from "./productlisting/product15img2.webp"
import traditional15_3 from "./productlisting/product15img3.webp"

import traditional16_1 from "./productlisting/product16img1.webp"
import traditional16_2 from "./productlisting/product16img2.webp"
import traditional16_3 from "./productlisting/product16img3.webp"

import traditional17_1 from "./productlisting/product17img1.webp"
import traditional17_2 from "./productlisting/product17img2.webp"
import traditional17_3 from "./productlisting/product17img3.webp"

import traditional18_1 from "./productlisting/product18img1.webp"
import traditional18_2 from "./productlisting/product18img2.webp"
import traditional18_3 from "./productlisting/product18img3.webp"

import traditional19_1 from "./productlisting/product19img1.webp"
import traditional19_2 from "./productlisting/product19img2.webp"
import traditional19_3 from "./productlisting/product19img3.webp"


11
const products = [
  {
    id: 1,
    categories: "kurti",
    categories2: "traditional",
    img: {
      url: traditional1_1,
      url2: traditional1_2,
      url3: traditional1_3
    },
    new:true,
    name: "Elegant Kurti",
    price: 1899,
    color: "pink",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "A classic traditional kurti with elegant prints and premium fabric."
  },
  {
    id: 2,
    categories: "sharara",
    categories2: "traditional",
    img: {
      url: traditional2_1,
      url2: traditional2_2,
      url3: traditional2_3,
    },
      new:false,
    name: "Trendy Sharara",
    price: 2524,
    color: "yellow",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Modern sharara with fusion western style. Perfect for parties."
  },
  {
    id: 3,
    categories: "lehenga",
    categories2: "traditional",
    img: {
      url: traditional3_1,
      url2: traditional3_2,
      url3:traditional3_3
    },
    new:true,
    name: "Bridal Lehenga",
    price: 3200,
    color: "green",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Designer bridal lehenga made with luxurious silk and embroidery."
  },
  {
    id: 4,
    categories: "tra",
    categories2: "traditional",
    img: {
      url:traditional4_1,
      url2: traditional4_2,
      url3: traditional4_3
    },
    new:false,
    name: "Evening Gown",
    price: 3100,
    color: "light pink",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Sleek western-style gown perfect for formal occasions."
  },
  {
    id: 5,
    categories: "suit",
    categories2: "traditional",
    img: {
      url: traditional5_1,
      url2: traditional5_2,
      url3: traditional5_3
    },
    new:true,
    name: "Punjabi Suit",
    price: 2100,
    color: "white",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Beautiful traditional suit set with phulkari dupatta."
  },
  {
    id: 6,
    categories: "sharara",
    categories2: "traditional",
    img: {
      url: traditional6_1,
      url2: traditional6_2,
      url3: traditional6_3
    },
    new:true,
    name: "Chic Palazzo",
    price: 1799,
    color: "pink",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Wide-legged sharara palazzo pants for modern and casual look."
  },
  {
    id: 7,
    categories: "anarkali",
    categories2: "traditional",
    img: {
      url: traditional7_1,
      url2: traditional7_2,
      url3: traditional7_3
    },
    new:false,
    name: "Graceful Anarkali",
    price: 2950,
    color: "pink",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Flowing anarkali suit with golden zari work. Ideal for festivals."
  },
  {
    id: 8,
    categories: "top",
    categories2: "traditional",
    img: {
      url: traditional8_1,
      url2: traditional8_2,
      url3: traditional8_3
    },
    new:false,
    name: "Trendy Top",
    price: 1450,
    color: "sky blue",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Trendy printed top with a western vibe."
  },
  {
    id: 9,
    categories: "dress",
    categories2: "traditional",
    img: {
      url: traditional9_1,
      url2: traditional9_2,
      url3: traditional9_3
    },
    new:true,
    name: "Fusion Dress",
    price: 2699,
    color: "mehrun",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Fusion ethnic dress perfect for weddings or get-togethers."
  },
  {
    id: 10,
    categories: "skirt",
    categories2: "traditional",
    img: {
      url: traditional10_1,
      url2: traditional10_2,
      url3: traditional10_3
    },
    new:true,
    name: "Denim Skirt",
    price: 1899,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },
    {
    id: 11,
    categories: "sharara",
    categories2: "traditional",
    img: {
      url: traditional11_1,
      url2: traditional11_2,
      url3: traditional11_3
    },
    new:true,
    name: "Denim Skirt",
    price: 1299,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Traditional sara suite with side slits for casual outings."
  },
    {
    id: 12,
    categories: "kurti",
    categories2: "traditional",
    img: {
      url: traditional12_1,
      url2: traditional12_2,
      url3: traditional12_3
    },
    new:false,
    name: "Kurti",
    price: 1499,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "Traditional sara suite with side slits for casual outings."
  },
   {
    id: 13,
    categories: "dress",
    categories2: "traditional",
    img: {
      url: traditional13_1,
      url2: traditional13_2,
      url3: traditional13_3
    },
    new:true,
    name: "Fasion dress",
    price: 999,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "cotton dress with side slits for casual outings."
  },


  
   {
    id: 14,
    categories: "kurti",
    categories2: "westren",
    img: {
      url: traditional14_1,
      url2: traditional14_2,
      url3: traditional14_3
    },
    new:true,
    name: "kurti",
    price: 1699,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },

  {
    id: 15,
    categories: "skirt",
    categories2: "traditional",
    img: {
      url: traditional15_1,
      url2: traditional15_2,
      url3: traditional15_3
    },
    new:false,
    name: "Denim Skirt",
    price: 1899,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },
  
   {
    id: 16,
    categories: "skirt",
    categories2: "traditional",
    img: {
      url: traditional16_1,
      url2: traditional16_2,
      url3: traditional16_3
    },
    new:false,
    name: "Denim Skirt",
    price: 1699,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },

  
  
   {
    id: 17,
    categories: "Lehenga",
    categories2: "traditional",
    img: {
      url: traditional17_1,
      url2: traditional17_2,
      url3: traditional17_3
    },
    new:true,
    name: "Bridal Lehenga",
    price: 4999,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },


  {
    id: 18,
    categories: " suit",
    categories2: "traditional",
    img: {
      url: traditional18_1,
      url2: traditional18_2,
      url3: traditional18_3
    },
    new:true,
    name: "party wear  suit",
    price: 1399,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },

  
  {
    id: 19,
    categories: " suit",
    categories2: "traditional",
    img: {
      url: traditional19_1,
      url2: traditional19_2,
      url3: traditional19_3
    },
    new:false,
    name: "party wear  suit",
    price: 1599,
    color: "teal",
    size: { s: "S", l: "L", xl: "XL", xxl: "XXL" },
    description: "denim skirt with side slits for casual outings."
  },
 
 



  

  // Repeat and rotate above structure till id: 40
];
export default products