let cartStorage = localStorage.getItem("cartProducts"); 

const nombre = new URLSearchParams(window.location.search).get('nombreTarjeta') || 'Cliente';

if (cartStorage) {
    localStorage.clear()
}
        
 document.getElementById('mensaje').textContent = `${nombre}, gracias por tu compra!`;

 Swal.fire("Gracias por su compra");