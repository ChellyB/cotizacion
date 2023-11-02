function cotizacionPedido(){
    if (document.getElementById("nom_cotizante").validity.valid) {
        if (document.getElementById("cant_celulares").validity.valid) {
            if (document.getElementById("nom_productos").validity.valid) {
                if (document.getElementById("precioUnitario").validity.valid) {
                    var nombreCotizante = document.getElementById("nom_cotizante").value;
                    var cantidad = document.getElementById("cant_celulares").value;
                    var producto = document.getElementById("nom_productos").value;
                    var precio = document.getElementById("precioUnitario").value;
                } 
                if(nombreCotizante == "" && cantidad == "" && producto=="" && precio==""){
                alert("completas todos los campos");
                }else{
                    alert("Nombre del cotizante:" + " " + nombreCotizante +
                    "Cantidad:" + " " + cantidad +" " + "Producto:"+" " + producto + "Precio:" + " " + precio + "Total a pagar:" + " " + cantidad*precio );
                }
            }         
        }           
    } 
}

