let cartContainer = document.getElementById("carrito-cont");
let cartStorage = localStorage.getItem("cartProducts"); 

if (cartStorage) {
    cartStorage = JSON.parse(cartStorage); 
    renderCarrito(cartStorage); 
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
            <button class = "productoEliminar" id="${producto.id}">Eliminar</button>`
        ;
        cartContainer.appendChild(card); 
      
    });

 removeItem();

}

function removeItem () {
    let removeButton = document.querySelectorAll(".productoEliminar")
     removeButton.forEach(button => {
         button.onclick = (e) => {
             const productId = e.currentTarget.id
             cartStorage = cartStorage.filter(producto => producto.id != productId)
             localStorage.setItem("cartProducts", JSON.stringify(cartStorage));
             renderCarrito(cartStorage)
             console.log(cartStorage)
            
         }
 
     });
 }
 


