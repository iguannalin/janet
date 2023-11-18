window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  function createElement(text) {
    const pre = document.createElement("pre");
    pre.innerHTML = text;
    container.appendChild(pre);
  }
  // incredible ascii art from -- https://www.asciiart.eu/plants/cactus
  fetch("cacti.json").then((r)=>r.json()).then((d)=>{
    d.forEach((el)=>createElement(el));
  })
});