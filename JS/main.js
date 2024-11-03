let counter = document.getElementById("counter")
let sumar = document.getElementById("plus-button")
let restar = document.getElementById("minus-button")
let contador = 0

let cartProducts = []

let productsContainer = document.getElementById("productos-cont")
 this.getProducts();

 let productos = JSON.parse(localStorage.productos);

 productos.forEach(producto => {
        const card = document.createElement("div")
        card.className = "productos col-4";

         card.innerHTML = `
         <div class="card mb-3">
            <img class = "img" src="${producto.imagen}"/>
        <div/>
         <div class="card-body"
            <h3>${producto.nombre}</h3>
             <p>$${producto.precio}</p>
             <button class="productoAgregar" id="${producto.id}">Agregar</button>
         <div/>`;
    productsContainer.appendChild(card)

    });

    addToCartButton();


function addToCartButton () {
   let addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)
            localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
            contador++
            counter.innerHTML = contador
        }

    });
}

async function getProducts() {
    fetch("./db/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los productos');
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("productos", JSON.stringify(data));
        console.log("Productos guardados en localStorage:", data); 
    })
    .catch(error => console.error(error));

}


sumar.onclick = () => {          
            contador++
            counter.innerHTML = contador
        }
        
        restar.onclick = () => {
            if (contador > 0) {
            contador--
            counter.innerHTML = contador
            }
        }