const productos= [
    {
        id: 1,
        nombre: "camiseta juego",
        precio: 3000
    },
    {
        id: 2,
        nombre: "short juego",
        precio: 2000
    },
    {
        id: 3,
        nombre: "remera salida",
        precio: 2500
    },
    {
        id: 4,
        nombre: "panatalon largo",
        precio: 4000
    },
    {
        id: 5,
        nombre: "buzo",
        precio: 4000
    },
    {
        id: 6,
        nombre: "campera",
        precio: 3500
    }

]

let counter = document.getElementById("counter")
let sumar = document.getElementById("plus-button")
let restar = document.getElementById("minus-button")
let contador = 0

let productsContainer = document.getElementById("productos-cont")

function renderProductos (productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
         card.innerHTML = `<h3>${producto.nombre}</h3>
                           <p>${producto.precio}</p>
                           <button class="productoAgregar" id="${producto.id}">Agregar</button>`
    productsContainer.appendChild(card)
    })
    addToCartButton()
}
renderProductos(productos)

function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)
            localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
        }
sumar.onclick = () => {          
            contador++
            counter.innerHTML = contador
        }
        
        restar.onclick = () => {
            contador--
            counter.innerHTML = contador
        }

    });
}

// sumar.onclick = () => {
//     contador++
//     counter.innerHTML = contador
// }

// restar.onclick = () => {
//     contador--
//     counter.innerHTML = contador
// }