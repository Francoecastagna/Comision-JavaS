let cartContainer = document.getElementById("carrito-cont")

let cartStorage = localStorage.getItem("cartProductos")
cartStorage = JSON.parse (cartStorage)

    function renderCarrito(cartItems) {
        cartItems.forEach(producto => {
            const card = document.createElement("div")
            card.innerHTML = `<h3>${producto.nombre}</h3>
                             <p>$${producto.precio}</p>`
        cartContainer.appendChild(card)
            
        });
    }

    renderCarrito(cartStorage)



