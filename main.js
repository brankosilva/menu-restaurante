//*************************************** ****************** ***********************************//
//*************************************** MENU BODEGÓN ****************************************//


let menu = [

    {nombre: "bastones de muzzarella", precio: 4000, categoria: "entradas"},
    {nombre: "pizza Napolitana", precio: 6500, categoria: "platos principales"},
    {nombre: "hamburguesa", precio: 8000, categoria: "platos principales"},
    {nombre: "coca-cola", precio: 3000, categoria: "bebidas"},
    {nombre: "pepsi", precio: 3000, categoria: "bebidas"},
    {nombre: "tiramisú", precio: 3200, categoria: "postres"},
    {nombre: "flan con ddl", precio: 3800, categoria: "postres"},
];

console.table(menu);


//*************************************** ****************** *********************************************//
//*************************************** AGREGAR PRODUCTO NUEVO ****************************************//



class Producto {
    constructor (nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

function agregarProducto() {
    let continuar = true;

    while (continuar === true) {
        let productoNuevo = prompt("Ingresá el nombre del nuevo producto:").toLowerCase();
        let productoNuevoExiste = menu.some((producto) => producto.nombre.toLowerCase() === productoNuevo);

        if (!productoNuevoExiste) {
            let precioNuevo = parseFloat(prompt("Ingresá el precio del nuevo producto:"));
                if (isNaN(precioNuevo) || precioNuevo < 0 ) {
                    alert ("ingresa un precio válido");
                } else {
                    let categoriaNueva = prompt("Ingresá la categoria del nuevo producto:").toLowerCase();
                    menu.push( new Producto(productoNuevo, precioNuevo, categoriaNueva));
                    alert ("El producto" + " " + productoNuevo + " " + "se agregó correctamente");
                }
        } else {
                alert ("Ese producto ya existe");
        }

        let respuesta = prompt ("¿Queres agregar otro producto al menú? Si/No").toLocaleLowerCase();
        if (respuesta === "si") {
            continuar = true
        } else {
            continuar = false;
        }
    }

}


//*************************************** ****************** *********************************************//
//*************************************** MODIFICAR PRECIO PRODUCTO ****************************************//



function modificarPrecio () {
    let continuar = true;

    while (continuar === true) {

        let cambioPrecioProducto = prompt ("Ingresá el nombre del producto que le querés cambiar el precio").toLowerCase();
        let productoEncontrado = menu.find((producto) => producto.nombre.toLowerCase() === cambioPrecioProducto);
    
        if(productoEncontrado) {
            let nuevoPrecio = parseFloat(prompt("Ingresa el nuevo precio para:" + " " + cambioPrecioProducto));
            if (isNaN(nuevoPrecio) || nuevoPrecio < 0 ) {
                alert ("ingresa un precio válido");
            } else {
                productoEncontrado.precio = nuevoPrecio;
                alert("El precio del" + " " + cambioPrecioProducto + " " + "se modificó a:" + " " + "$" + nuevoPrecio);
            }

        } else {
            alert("El producto que quiere modificar no se encuentra en el menú")
        }

        let respuesta = prompt ("¿Queres modificar el precio de otro producto? Si/No").toLocaleLowerCase();
        if (respuesta === "si") {
            continuar = true
        } else {
            continuar = false;
        }
    }

}



//*************************************** ****************** *********************************************//
//*************************************** MODIFICAR NOMBRE PRODUCTO ****************************************//



function modificarNombre () {
    let continuar = true;

    while (continuar === true) {

        let cambioNombreProducto = prompt ("Ingresá el nombre del producto que queres modificar").toLowerCase();
        let productoEncontrado = menu.find((producto) => producto.nombre.toLowerCase() === cambioNombreProducto);
    
        if(productoEncontrado) {
            let nuevoNombre = prompt("Ingresa el nuevo nombre para:" + " " + cambioNombreProducto).toLowerCase();
            productoEncontrado.nombre = nuevoNombre;
            alert("El nombre del" + " " + cambioNombreProducto + " " + "se modificó a:" + " " + nuevoNombre);
        } else {
            alert("El producto que quiere modificar no se encuentra en el menú")
        }

        let respuesta = prompt ("¿Queres modificar el nombre de otro producto? Si/No").toLocaleLowerCase();
        if (respuesta === "si") {
            continuar = true
        } else {
            continuar = false;
        }
    }
}



//*************************************** ****************** *********************************************//
//*************************************** ELIMINAR UN PRODUCTO DEL MENÚ ****************************************//



function eliminarProducto () {
    let continuar = true;

    while (continuar === true) {

        let eliminarProducto = prompt ("Ingresá el nombre del producto que queres eliminar").toLowerCase();
        let menuActualizado = menu.filter((producto) => producto.nombre.toLowerCase() !== eliminarProducto);
    
        if(menuActualizado.length === menu.length) {
            alert("El producto que queres eliminar, no se encuentra en el menú");
        } else {
            menu = menuActualizado;
            alert("El producto" + " " + eliminarProducto + " " + "fue eliminado del menú")
        }

        let respuesta = prompt ("¿Queres eliminar otro producto? Si/No").toLocaleLowerCase();
        if (respuesta === "si") {
            continuar = true
        } else {
            continuar = false;
        }
    }
}


//*************************************** EJECUTAR FUNCIONAMIENTO MENU  ****************************************//


function funcionamientoMenu () {
    
    let solicitarCambioMenu = parseInt(prompt ("Qué querés hacer? " + "Selecciona:" + "\n1 - Agregar producto nuevo\n2 - Eliminar producto\n3 - Modificar precio\n4 - Modificar nombre\n5 - Mostrar menú\n6 - Salir del menú"));

    let continuar = false; 

        switch (solicitarCambioMenu) {
            case 1: 
                agregarProducto();
                break;
            case 2: 
                eliminarProducto ();
                break;
            case 3: 
                modificarPrecio ();
                break;
            case 4: 
                modificarNombre ();
                break;
            case 5: 
                console.table(menu);
                break;
            case 6: 
                alert("Estas saliendo del menú");
                continuar = true;
                break;
            default:
                alert("Opción no válida. Ingresá un número entre 1 y 6");
        }

        if (solicitarCambioMenu !== 6) {
            let otroCambio = confirm("¿Queres ver el menú o hacer más cambios?");
            if (otroCambio === true) {
                funcionamientoMenu ();
            } else {
                alert("Estas saliendo del menú")
            }
        }
}

funcionamientoMenu ();



