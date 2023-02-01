const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");
let incrementPar = document.getElementById("increment-par");
let incrementPar2 = document.getElementById("increment-par2");
let username = document.getElementById("username");
let username1 = document.getElementById("username1");
let comments = document.querySelector(".comments");
let comments1 = document.querySelector(".comments1");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const firstContainer = document.querySelector(".first-container");
const main = document.querySelector(".main");
const myContainer = document.querySelector(".myContainer");
const paragraph = document.querySelector(".paragraph");

let reply = document.getElementById("icon-reply");
let reply1 = document.getElementById("icon-reply1");

async function getData() {
  const res = await fetch("data.json");
  const data = await res.json();

  username.innerText = Object.values(data.comments)[0].user.username;
  comments.textContent = Object.values(data.comments)[0].content;

  username.fontWeight = "900";

  username1.innerText = Object.values(data.comments)[1].user.username;
  comments1.textContent = Object.values(data.comments)[1].content;

  plus.addEventListener("click", () => {
    incrementPar.innerText++;
    plus.style.fontWeight = "800";
  });

  reply.addEventListener("click", () => {
    const imgDiv = document.createElement("img");
    imgDiv.className = "img-div";
    imgDiv.src = Object.values(data.currentUser)[0].png;
    const button = document.createElement("button");
    button.innerText = "Reply";
    button.className = "btn-div";
    container.style.display = "block";
    const divReply = document.createElement("textarea");
    divReply.value = `@${Object.values(data.comments)[0].user.username}`;

    divReply.style.fontWeight = "100";
    divReply.style.fontSize = "18px";

    container.append(divReply, button, imgDiv);

    console.log(Object.values(data.currentUser)[0].png);

    button.addEventListener("click", () => {
      const myDiv = document.createElement("div");

      // const paragraph = document.createElement("h4");

      const imgMe = document.createElement("img");
      imgMe.className = "imgMe";

      imgMe.src = Object.values(data.currentUser)[0].png;
      paragraph.className = "paragraph";
      myContainer.appendChild(imgMe);
      paragraph.style.color = "hsl(211, 10%, 45%)";
      paragraph.style.fontWeight = "500";
      paragraph.style.fontSize = "23px";

      paragraph.innerText = divReply.value;
      paragraph.style.display = "block";
      myContainer.appendChild(myDiv);

      // if (divReply.value.length > 200) {
      //   paragraph.innerText.classList.add("line");
      // }
    });
  });
  reply1.addEventListener("click", () => {
    const divReply = document.createElement("textarea");
    const button = document.createElement("button");
    button.className = "btn-div";
    button.innerText = "Reply";
    divReply.value = Object.values(data.comments)[1].user.username;
    container2.append(divReply, button);
    container2.style.display = "block";
  });
  minus.addEventListener("click", () => {
    incrementPar.innerText--;
    plus.style.fontWeight = "800";
  });
  minus2.addEventListener("click", () => {
    incrementPar2.innerText--;
    plus.style.fontWeight = "800";
  });
  plus2.addEventListener("click", () => {
    incrementPar2.innerText++;
    plus.style.fontWeight = "800";
  });
}
getData();
