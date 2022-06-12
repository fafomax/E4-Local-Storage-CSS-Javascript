const boton = document.getElementById("boton");
const tituloPizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const ingredientesPizza = document.getElementById("ingredientesPizza");
const error1 = document.getElementById("error");
const imgPizza = document.getElementById("#imgPizza");
const inputNum = document.getElementById("numberFilter");
const pizzas = [
  {
    id: 1,
    nombre: "Promo",
    ingredientes: ["salsa", "queso", "jamon", "morron"],
    precio: 590,
  },
  {
    id: 2,
    nombre: "4 Quesos",
    ingredientes: ["salsa", "mozzarella", "roquefort", "parmesano", "tybo"],
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Pollo",
    ingredientes: ["salsa", "queso", "pollo", "crema"],
    precio: 970,
  },
  {
    id: 4,
    nombre: "Tropical",
    ingredientes: ["salsa", "queso", "jamon", "cerezas", "anana"],
    precio: 1050,
  },
  {
    id: 5,
    nombre: "Puerro",
    ingredientes: ["salsa", "queso", "oregano", "puerro", "panceta"],
    precio: 950,
  },
  {
    id: 6,
    nombre: "Roquefort",
    ingredientes: ["salsa", "queso", "roquefort"],
    precio: 1200,
  },
];

function buscadorPizzas() {
  const value1 = parseInt(inputNum.value);
  pizzas.forEach((pizzas) => {
    if (value1 === pizzas.id) {
      tituloPizza.innerHTML = pizzas.nombre;
      precioPizza.innerHTML = "$" + pizzas.precio;
      ingredientesPizza.innerHTML = pizzas.ingredientes.join(", ");
      error1.innerHTML = "";
    } else if (value1 > 5) {
      error1.innerHTML = "Articulo no encontrado ";
      tituloPizza.innerHTML = "";
      precioPizza.innerHTML = "";
      ingredientesPizza.innerHTML = "";
    }
  });
}

boton.addEventListener("click", buscadorPizzas);
