const nombre = new URLSearchParams(window.location.search).get('nombreTarjeta') || 'Cliente';
        
        
 document.getElementById('mensaje').textContent = `${nombre}, gracias por tu compra!`;