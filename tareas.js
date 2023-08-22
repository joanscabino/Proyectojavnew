//Usuario y clave
for (let i=1; i<=3; i++){
    usuario=prompt("Ingresa Nombre de usuario");
    clave=prompt("Ingresa clave");
    if((usuario == "Admin") && (clave == "1234")){
        alert("Bienvenido Inge")
        break
    }else{   //3-i tres el el total de intentos menos i que es el numero de ciclo
        alert("Usuario y/o contraseña incorrecta. Te queda "+(3-i)+ " intentos") 
    }
}


//Lista de precios

let Carrito =0

let idProducto=parseInt(prompt ("LISTA DE PRECIOS \n 1-TORNILLO KUROSAKA TOMO TITANIO... $80 US\n 2-ARPON DE TITANIO DOBLE SUTURA.. $90 US\n 3-ARPON DE PEEK DOBLE SUTURA... $130 US\n 4-SUTURA MENISCAL DENTRO/FUERA... $170 US \n 0- PARA FINALIZAR LA CARGA DE PRODUCTOS"));

//Ciclo
while (idProducto !=0){

    switch (idProducto){
        case 1:
            alert ("AGREGASTE 1 TORNILLO KUROSAKA TOMO TITANIO")
            sumarCarrito(80);
            break;
        case 2:
            alert("AGREGASTE 1 ARPON DE TITANIO DOBLE SUTURA")
            sumarCarrito(90);
            break
        case 3:
            alert("AGREGASTE 1 ARPON DE PEEK DOBLE SUTURA ")
            break;
            sumarCarrito(130);
        case 4:
            alert("AGREGASTE 1 SUTURA MENISCAL DENTRO/FUERA")
            break;
            sumarCarrito(170);
        default:
            alert("Codigo de libro producto erroneo ")
    }
    idProducto=parseInt(prompt ("LISTA DE PRECIOS \n 1-TORNILLO KUROSAKA TOMO TITANIO... $80 US\n 2-ARPON DE TITANIO DOBLE SUTURA.. $90 US\n 3-ARPON DE PEEK DOBLE SUTURA... $130 US\n 4-SUTURA MENISCAL DENTRO/FUERA... $170 US \n 0- PARA FINALIZAR LA CARGA DE PRODUCTOS"));
}

// Carrito de compras con function

function sumarCarrito (precioArticulo){
    Carrito = Carrito + precioArticulo 
    console.log ("Subtotal Carrito &" + Carrito)
}

// Envio
let envio=false

do{
    let eleccion=prompt ("1-Deseo envio a domicilio \n 2-Retira por el local");
    if (eleccion == "1"){
        envio = true;
        console.log("Envio a su domicilio")
        break // para que corte cuando elegis esta opcion
    }else if (eleccion == "2"){
        envio = false;
        console.log ("Selecciones su punto de retiro")
    }else{
        alert ("Ingrese 1 o 2");
        envio = true
    }
}while(envio == true)

//Total a pagar 

alert("El Total a pagar es $ " + Carrito + " us" )

let pago=parseInt (prompt("Metodo de Pago\n 1-Efectivo \n 2- Trasnferencia Bancaria \n 3-Criptomonedas\n 4-Comunicate con tu vendedor "))

    switch (pago){
        case 1:
            alert ("Tienes un 10% OFF, Abonas un total de $" + CalcDescuento(Carrito));
            break
        case 2: //SE puede poder un or aca?? porque no me funciono 
            alert ("Envia tu comprobante de pago a info@fixamed.com.ar")
            break
        case 3:
            alert ("Envia tu comprobante de pago a info@fixamed.com.ar")
        case 4:
            alert("Comunicate con tu vendedor")
            
    }

function CalcDescuento (Final){
        return Final * 0.90;
    }



// Agregar direccion de envio y si quiere envio 