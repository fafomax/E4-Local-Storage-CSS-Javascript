import {
    pizzas
} from "./db.js"

const boton = document.getElementById("boton");
const tituloPizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const ingredientesPizza = document.getElementById("ingredientesPizza");
const error1 = document.getElementById("error");
const imgPizza = document.getElementById("imgPizza");
const inputNum = document.getElementById("numberFilter");

function buscadorPizzas() {
    const value1 = parseInt(inputNum.value);
    pizzas.forEach((pizzas) => {
        if (value1 === pizzas.id) {
            tituloPizza.innerHTML = pizzas.nombre;
            precioPizza.innerHTML = "$" + pizzas.precio;
            ingredientesPizza.innerHTML = pizzas.ingredientes.join(", ");
            imgPizza.innerHTML = `<img src= "${pizzas.img}" alt="">`;
            error1.innerHTML = "";
        } else if (value1 > 5 || value1 == 0) {
            imgPizza.innerHTML = `<img src= "/Nucba/Tarea/Js/E4-LocalStorage+CSS/assets/error.jpg" alt="">`;
            error1.innerHTML = "Articulo no encontrado ";
            tituloPizza.innerHTML = "";
            precioPizza.innerHTML = "";
            ingredientesPizza.innerHTML = "";
        }
    });
}

boton.addEventListener("click", buscadorPizzas);