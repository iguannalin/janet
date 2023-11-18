window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const garden = [];
  function createElement(text) {
    if (Math.random()>0.8) return;
    const pre = document.createElement("pre");
    pre.innerHTML = text;
    pre.style.left = getRandomInt(-100,window.innerWidth-100)+"px";
    pre.style.top = getRandomInt(-100,window.innerHeight-100)+"px";
    pre.style.fontSize = getRandomInt(5,18)+"px";
    garden.push(pre);
    container.appendChild(pre);
  }
  // incredible ascii art from -- https://www.asciiart.eu/plants/cactus
  fetch("cacti.json").then((r)=>r.json()).then((d)=>{
    for (let i = 0; i < getRandomInt(5,15); i++) {
      createElement(d[getRandomInt(0,d.length)]);
    }
  });

  document.body.onclick = (e) => {
    e.preventDefault();
    const text = `<!DOCTYPE html><html> <head> <title>janet</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://iguannalin.github.io/janet/index.css"/> </head> <body> <div id="container" data-garden=${garden}></div><script>window.addEventListener("load", ()=>{const container=document.getElementById("container"); const garden=container.dataset.garden; function goFurther(){garden.forEach((el)=> el.style.left=+(el.offsetLeft)+1+"px");}}); </script> </body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_self');
    window.URL.revokeObjectURL(blobUrl);
  }
});