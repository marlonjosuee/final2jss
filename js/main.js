const numero1localstorage = localStorage.getItem("numero1");
const numero1 = document.getElementById("numero1");
const button1 = document.getElementById("boton1");

let cantidad1 = Number(numero1localstorage) || 0;
numero1.innerHTML = cantidad1;

button1.onclick = () => {
  cantidad1 += 1;
  numero1.innerHTML = cantidad1;
  localStorage.setItem("numero1", cantidad1);
};

const numero2localstorage = localStorage.getItem("numero2");
const numero2 = document.getElementById("numero2");
const button2 = document.getElementById("boton2");
let cantidad2 = numero2localstorage !== null ? Number(numero2localstorage) : 0;
numero2.innerHTML = cantidad2;

button2.onclick = () => {
  cantidad2 += 1;
  numero2.innerHTML = cantidad2;
  localStorage.setItem("numero2", cantidad2);
};
