import { Image, sampleTapsilog, product } from "./utilities/image.js";
import Silogone from "./images/silog1.png";
import Arrow from "./images/arrow.png";
import Silogtwo from "./images/silog2.png";

import "./styles/style.css";
import "./styles/header.css";
import "./styles/about.css";
import "./styles/menu.css";
import "./styles/contact.css";
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  HomePage();
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  about();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  menu();
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  contact();
});

HomePage();
function HomePage() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const menuBtn = document.createElement("button");
  const tapsiPlate1 = Image(Silogone);
  const arrow = Image(Arrow);

  menuBtn.classList = "menuBtn";
  arrow.classList = "arrow";
  h1.classList = "storeName";
  h2.classList = "slogan";
  div.classList = "content";
  tapsiPlate1.classList = "plate1";

  menuBtn.textContent = `View menu`;
  h1.textContent = "Silog House";
  h2.textContent = "-------- Crave it. Savor it. Repeat --------";

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(menuBtn);
  menuBtn.appendChild(arrow);
  content.appendChild(div);
  content.appendChild(tapsiPlate1);

  document.body.className = "home";

  return content;
}

function about() {
  document.body.className = "about";
  let productHtml = "";
  sampleTapsilog.forEach((product) => {
    productHtml += `
    <div class="outerBox">
            <div class="imageBox"><img src="${product.image}" alt="${product.alt}"></div>
            <div class="info">
              <p class="aboutTheProduct">${product.about}</p>
              <h2 class="name">${product.name}</h2>
            </div>
        </div>
    `;
  });

  content.innerHTML = productHtml;

  return content;
}

function menu() {
  document.body.className = "menu";
  let productHtml = "";
  const menuBoard = document.createElement("div");
  const title = document.createElement("h1");
  const menuSign = document.createElement("p");
  const prices = document.createElement("div");
  const bgSilog = Image(Silogtwo);
  bgSilog.classList = "bgSilog";
  title.classList = "title";
  menuSign.classList = "menuSign";
  menuBoard.classList = "menuBoard";
  prices.classList = "prices";

  title.textContent = "Silog House";
  menuSign.textContent = "menu";

  product.forEach((item) => {
    productHtml += `
            <div class="product"><div>${item.name}</div> <div>----------------</div> <div class= "priceDiv">${item.price}</div></div>
        `;
  });

  content.appendChild(bgSilog);
  content.appendChild(menuBoard);
  menuBoard.appendChild(title);
  menuBoard.appendChild(menuSign);
  menuBoard.appendChild(prices);
  prices.innerHTML = productHtml;

  return content;
}

function contact() {
  document.body.className = "contact";
  let contentHtnml = `
        <div class = "container">
          <div class="box">
            <p>Address</p>
            <p>address</p>
            <p>contact number</p>
            <p>emailaddress@gmail.com</p>
          </div>
          <div  class="box">
            <p>Working Hour</p>
            <p>7am-10pm</p>
            <p>12pm-10pm</p>
            <p>12pm-6pm</p>
          </div>
        </div>
  `;
  content.innerHTML = contentHtnml;
  return content;
}
