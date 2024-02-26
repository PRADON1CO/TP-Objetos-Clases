class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      document.write(`<p>Código: ${this.codigo}</p>`);
      document.write(`<p>Nombre: ${this.nombre}</p>`);
      document.write(`<p>Precio: ${this.precio}</p>`);
    }
  }
  
  const producto1 = new Producto(1, "Camiseta", 20);
  const producto2 = new Producto(2, "Pantalón", 30);
  const producto3 = new Producto(3, "Zapatos", 50);
  
  const arrayProductos = [producto1, producto2, producto3];
  
  for (let i = 0; i < arrayProductos.length; i++) {
    document.write(`Producto ${i + 1}:`);
    arrayProductos[i].imprimeDatos();
    document.write("<p>--------------------</p>");
  }