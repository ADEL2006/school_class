const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const btn = document.querySelector("#btn");
const div = document.querySelector("#div");

btn.addEventListener("click", () => {
    let newP1 = document.createElement("p");
    let newP2 = document.createElement("p");

    let newContant1 = document.createTextNode("장미꽃은 빨간색이다.");
    let newContant2 = document.createTextNode("장미꽃");

    newP1.appendChild(newContant1);
    newP1.style.color = "red";
    newP1.style.fontSize = "20px";

    newP2.appendChild(newContant2);

    div.appendChild(newP1);
    div.appendChild(newP2);

    p1.remove();
    p2.remove();
});