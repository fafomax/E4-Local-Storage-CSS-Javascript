export const pizzas = [{
        id: 1,
        nombre: "Promo",
        ingredientes: ["Salsa", "Queso", "Jamon", "Morron"],
        precio: 590,
        img: "/E4-LocalStorage+CSS/assets/1_pizzaPromo.jpg"
    },
    {
        id: 2,
        nombre: "4 Quesos",
        ingredientes: ["Salsa", "Mozzarella", "Roquefort", "Parmesano", "Tybo"],
        precio: 1000,
        img: "/E4-LocalStorage+CSS/assets/2_pizza4Quesos.jpg"
    },
    {
        id: 3,
        nombre: "Pollo",
        ingredientes: ["Salsa", "Queso", "Pollo", "Crema"],
        precio: 970,
        img: "/E4-LocalStorage+CSS/assets/3_pizzaPollo.jpg"
    },
    {
        id: 4,
        nombre: "Tropical",
        ingredientes: ["Salsa", "Queso", "Jamon", "Cerezas", "Anana"],
        precio: 1050,
        img: "/E4-LocalStorage+CSS/assets/4_pizzaTropical.jpg"
    },
    {
        id: 5,
        nombre: "Puerro",
        ingredientes: ["Salsa", "Queso", "Oregano", "Puerro", "Panceta"],
        precio: 950,
        img: "/E4-LocalStorage+CSS/assets/5_pizzaPuerro.jpg"
    },
    {
        id: 6,
        nombre: "Roquefort",
        ingredientes: ["Salsa", "Queso", "Roquefort"],
        precio: 1200,
        img: "/E4-LocalStorage+CSS/assets/6_pizzaRoquefort.jpg"
    },
];
localStorage.setItem("pizzas", JSON.stringify(pizzas));
