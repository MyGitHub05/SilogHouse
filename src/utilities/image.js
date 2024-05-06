import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
export function Image(url) {
  const image = document.createElement("img");
  image.src = url;

  return image;
}

export const sampleTapsilog = [
  {
    image: one,
    name: "Hotsilog",
    alt: "hotsilog",
    about:
      "Hotsilog is a meal composed of hotdogs, garlic fried rice, and fried egg.",
  },
  {
    image: two,
    name: "Chicsilog",
    alt: "chicsilog",
    about:
      "chicsilog is a meal composed of fried chicken, fried eggs, and fried rice.",
  },
  {
    image: three,
    name: "Porksilog",
    alt: "porksilog",
    about:
      "porksilog is a meal composed of pork chop, fried rice and fried egg.",
  },
];

export const product = [
  {
    name: "Tapsilog",
    price: "₱50",
  },
  {
    name: "Hotsilog",
    price: "₱50",
  },
  {
    name: "Chicsilog",
    price: "₱50",
  },
  {
    name: "Porksilog",
    price: "₱50",
  },
  {
    name: "Tosilog",
    price: "₱50",
  },
  {
    name: "Tapsilog",
    price: "₱50",
  },
  {
    name: "Shanghaisilog",
    price: "₱50",
  },
  {
    name: "Hamsilog",
    price: "₱50",
  },
  {
    name: "Bangsilog",
    price: "₱50",
  },
];
