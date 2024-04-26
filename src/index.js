import "./styles/main.scss";
function greetings() {
  const element = document.createElement("div");
  element.innerHTML = "hello alec";

  return element;
}

document.body.appendChild(greetings());
