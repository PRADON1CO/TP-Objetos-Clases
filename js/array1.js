const productos = ['Pizza', 'Hamburguesa', 'Sandwich'];
const precios = [10, 9, 15];

function agregarProductos(nombre, precio){
    productos.push(nombre);
    precios.push(precio);
    alert(`"${nombre}" ha sido agregado con éxito al inventario`);
}

function eliminarProducto(nombre) {
    const existeProducto = productos.includes(nombre);
    if (existeProducto) {
        const posicion = productos.indexOf(nombre);
        productos.splice(posicion, 1);
        precios.splice(posicion, 1);
        document.write(`<p>¡"${nombre}" ha sido eliminado del inventario!</p>`);
    } else {
        document.write(`<p>El producto "${nombre}" no existe en el inventario.</p>)`);
    }
}

function calcularValorTotal() {
    let valorTotal = 0;
    for (let i = 0; i < precios.length; i++) {
        valorTotal += precios[i];
    }
    return valorTotal;
}

const mostrarProductos = () => {
    document.write(`<table>`);
    document.write("<tr><th>producto </th> <th>Precios</th><tr>");
    for (let i = 0; i < productos.length; i++){
        document.write(`<tr><td>${productos[i]}</td>  <td>${precios[i]}</td></tr>`);
    }
    document.write(`</table>`);
}

document.write(`<h2>Inventario de Productos: ${productos.length}</h2>`);
mostrarProductos();
document.write(`Valor total del inventario: `, `$ ${calcularValorTotal()}`);

agregarProductos("Laptop", 50);
agregarProductos("Tablet", 30);
document.write(`<h2>Inventario de Productos: ${productos.length}</h2>`);
mostrarProductos();

const nombre = prompt('Ingrese el elemento a eleminar: ')
eliminarProducto(nombre);
document.write(`<h2>Inventario de Productos: ${productos.length}</h2>`);
mostrarProductos();

//para probar otra manera
const total = calcularValorTotal();
document.write(`<p>El valor total del invenmtario es: $ ${total}.</p>`);