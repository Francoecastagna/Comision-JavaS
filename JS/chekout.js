let cartContainer = document.getElementById("resumen-producto");
let totalscontainer = document.getElementById("totals");
let cartStorage = localStorage.getItem("cartProducts"); 

if (cartStorage) {
    cartStorage = JSON.parse(cartStorage); 
    renderCarrito(cartStorage); 
    getTotals(cartStorage)
} else {
    cartStorage = []; 
}

function renderCarrito(cartItems) {
    cartContainer.innerHTML = ""; 
    cartItems.forEach(producto => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
             <img class = "img" src=".${producto.imagen}"/>
           `
        ;
        cartContainer.appendChild(card); 
      
    });


}

function getTotals (cartItems) { 
    let totals = 0;
    totalscontainer.innerHTML = "";
    cartItems.forEach(producto => totals += producto.precio);

    totalscontainer.innerHTML = `<h3>Total: $${totals}</h3>`;
}