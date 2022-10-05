
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const pResult = document.querySelector("#result");
const btn = document.querySelector("#btnCalcular");
const form = document.querySelector("#form");

form.addEventListener("submit",onClickButton);


function onClickButton(event) {
    event.preventDefault();
    console.log("Entrando ");
    const result = Number(input1.value) + parseInt(input2.value);
    pResult.innerText = result;

}

/*console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

console.error(input.value);

h1.innerHTML = "Changing <br>the text";
p.innerText = "Jugando un rato con el innertext";
h1.classList.add("Blue", "green");
h1.classList.remove("Blue");

input.value = "new value";

const img = document.createElement("img");
img.setAttribute("src", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sensacine.com%2Fseries%2Fserie-3473%2F&psig=AOvVaw346o8wKEuTRopSzFgLUe7r&ust=1664911429200000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCg5MXkxPoCFQAAAAAdAAAAABAX");
console.log(img);
pid.innerText = "";
pid.append(img);*/