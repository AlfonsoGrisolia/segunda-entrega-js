const productos = [
    {nombre: "harina", precio: 90},
    {nombre: "galletitas", precio: 70},
    {nombre: "cerveza", precio: 300},
    {nombre: "leche", precio: 100},
    {nombre: "gaseosa", precio: 200}
];

let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto?")
while(seleccion != "si" && "no") {
    alert("Porfavor, ingresa si o no")
    seleccion = prompt("hola desea comprar algo? si o no")
}

if(seleccion === "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosproductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, vuelva pronto")
};

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "gaseosa"){
        switch(producto){
            case "harina":
                precio = 90;
                break;
                    case "galletitas":
                        precio = 70;
                        break;
                        case "cerveza":
                            precio = 300;
                            break;
                            case "leche":
                                precio = 100;
                                break;
                                case "gaseosa":
                                    precio = 200;
                                    break;
            default: 
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")
    while(seleccion == "no"){
        alert("Gracias por su compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0) 
console.log(`el total a pagar por su compra es: ${total} `)

