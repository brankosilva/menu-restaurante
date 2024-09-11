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

console.table(menu)

function menuBodegon () {
    console.log("🟡 Menú del Bodegón 👇");
    menu.forEach((producto) => {
        console.table(producto.nombre + " "+ "-" + " " + "$"+ producto.precio + " " + "-" + " " + producto.categoria);
    });
}


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
    let productoNuevo = prompt("Ingresá el nombre del nuevo producto:").toLowerCase();
    let productoNuevoExiste = menu.some((producto) => producto.nombre.toLowerCase() === productoNuevo)

    if (productoNuevoExiste) {
        alert ("Ese producto ya existe");
    } else {
        let precioNuevo = parseFloat(prompt("Ingresá el precio del nuevo producto:"));
        let categoriaNueva = prompt("Ingresá la categoria del nuevo producto:").toLowerCase();

        menu.push( new Producto(productoNuevo, precioNuevo, categoriaNueva));
        alert ("El producto" + " " + productoNuevo + " " + "se agregó correctamente");
    }
}


//*************************************** ****************** *********************************************//
//*************************************** MODIFICAR PRECIO PRODUCTO ****************************************//



function modificarPrecio () {
    let cambioPrecioProducto = prompt ("Ingresá el nombre del producto que le querés cambiar el precio").toLowerCase();
    let productoEncontrado = menu.find((producto) => producto.nombre.toLowerCase() === cambioPrecioProducto);

    if(productoEncontrado) {
        let nuevoPrecio = parseFloat(prompt("Ingresa el nuevo precio para:" + " " + cambioPrecioProducto));
        productoEncontrado.precio = nuevoPrecio;
        alert("El precio del" + " " + cambioPrecioProducto + " " + "se modificó a:" + " " + "$" + nuevoPrecio);
    } else {
        alert("El producto que quiere modificar no se encuentra en el menú")
    }
}



//*************************************** ****************** *********************************************//
//*************************************** MODIFICAR NOMBRE PRODUCTO ****************************************//



function modificarNombre () {
    let cambioNombreProducto = prompt ("Ingresá el nombre del producto que queres modificar").toLowerCase();
    productoEncontrado = menu.find((producto) => producto.nombre.toLowerCase() === cambioNombreProducto);

    if(productoEncontrado) {
        let nuevoNombre = prompt("Ingresa el nuevo nombre para:" + " " + cambioNombreProducto).toLowerCase();
        productoEncontrado.nombre = nuevoNombre;
        alert("El nombre del" + " " + cambioNombreProducto + " " + "se modificó a:" + " " + nuevoNombre);
    } else {
        alert("El producto que quiere modificar no se encuentra en el menú")
    }
}



//*************************************** ****************** *********************************************//
//*************************************** ELIMINAR UN PRODUCTO DEL MENÚ ****************************************//



function eliminarProducto () {
    let eliminarProducto = prompt ("Ingresá el nombre del producto que queres eliminar").toLowerCase();
    let menuActualizado = menu.filter((producto) => producto.nombre.toLowerCase() !== eliminarProducto);

    if(menuActualizado.length === menu.length) {
        alert("El producto que queres eliminar, no se encuentra en el menú");
    } else {
        menu = menuActualizado;
        alert("El producto" + " " + eliminarProducto + " " + "fue eliminado del menú")
    }
}



//*************************************** ****************** *********************************************//
//*************************************** EJECUTAR FUNCIONAMIENTO MENU 1 ****************************************//



    function funcionamientoMenu () {

            let solicitarCambioMenu = parseInt(prompt ("Qué querés hacer? " + "Selecciona:" + "\n1 - Agregar producto nuevo\n2 - Eliminar producto\n3 - Modificar precio\n4 - Modificar nombre\n5 - Mostrar menú\n6 - Salir del menú"));

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
                    menuBodegon ();
                    break;
                case 6: 
                    alert("Estas saliendo del menú");
                    continuar = false;
                    break;
                default:
                    alert("Opción no válida. Ingresá un número entre 1 y 6")
            }
        }

funcionamientoMenu ();



//*************************************** EJECUTAR FUNCIONAMIENTO MENU 2 ****************************************//



function funcionamientoMenu () {

    let continuar = true; 

    while (continuar) {

        let solicitarCambioMenu = parseInt(prompt ("Qué querés hacer? " + "Selecciona:" + "\n1 - Agregar producto nuevo\n2 - Eliminar producto\n3 - Modificar precio\n4 - Modificar nombre\n5 - Mostrar menú\n6 - Salir del menú"));

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
                menuBodegon ();
                break;
            case 6: 
                alert("Estas saliendo del menú");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Ingresá un número entre 1 y 6")
        }

        if ( continuar && solicitarCambioMenu !== 6) {
            continuar = confirm("¿Querés realizar otro cambio en el menú?");
        }
    }
}

funcionamientoMenu ()



