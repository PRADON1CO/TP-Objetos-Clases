class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.contactos = [];
      this.tamano = tamano;
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.tamano) {
        this.contactos.push(contacto);
        document.write("Contacto añadido a la agenda.<br>");
      } else {
        document.write("La agenda está llena. No se puede añadir más contactos.<br>");
      }
    }
  
    existeContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          return true;
        }
      }
      return false;
    }
  
    listarContactos() {
      document.write("Lista de contactos:<br>");
      for (let i = 0; i < this.contactos.length; i++) {
        document.write(`- Nombre: ${this.contactos[i].nombre}, Teléfono: ${this.contactos[i].telefono}<br>`);
      }
    }
  
    buscarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          document.write(`Nombre: ${this.contactos[i].nombre}, Teléfono: ${this.contactos[i].telefono}<br>`);
          return;
        }
      }
      document.write("Contacto no encontrado.<br>");
    }
  
    eliminarContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          this.contactos.splice(i, 1);
          document.write("Contacto eliminado de la agenda.<br>");
          return;
        }
      }
      document.write("Contacto no encontrado. No se puede eliminar.<br>");
    }
  
    agendaLlena() {
      return this.contactos.length === this.tamano;
    }
  
    huecosLibres() {
      return this.tamano - this.contactos.length;
    }
  }
  
  // Crear agenda con tamaño por defecto (10)
  const agenda = new Agenda();
  
  // Función para mostrar el menú y realizar las operaciones
  function mostrarMenu() {
    let opcion;
    do {
      opcion = prompt(
        "Menú de Agenda Telefónica:\n" +
          "1. Añadir contacto\n" +
          "2. Verificar existencia de un contacto\n" +
          "3. Listar contactos\n" +
          "4. Buscar contacto\n" +
          "5. Eliminar contacto\n" +
          "6. Verificar si la agenda está llena\n" +
          "7. Verificar huecos libres\n" +
          "0. Salir\n" +
          "Selecciona una opción:"
      );
  
      switch (opcion) {
        case "1":
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el teléfono del contacto:");
          const nuevoContacto = new Contacto(nombre, telefono);
          agenda.aniadirContacto(nuevoContacto);
          break;
  
        case "2":
          const nombreExistente = prompt("Ingrese el nombre del contacto a verificar:");
          const contactoExistente = new Contacto(nombreExistente, "");
          const existe = agenda.existeContacto(contactoExistente);
          if (existe) {
            document.write("El contacto existe en la agenda.<br>");
          } else {
            document.write("El contacto no existe en la agenda.<br>");
          }
          break;
  
        case "3":
          agenda.listarContactos();
          break;
  
        case "4":
          const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;
  
        case "5":
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          const contactoEliminar = new Contacto(nombreEliminar, "");
          agenda.eliminarContacto(contactoEliminar);
          break;
  
        case "6":
          if (agenda.agendaLlena()) {
            document.write("La agenda está llena.<br>");
          } else {
            document.write("La agenda no está llena.<br>");
          }
          break;
  
        case "7":
          const huecosLibres = agenda.huecosLibres();
          document.write(`Huecos libres en la agenda: ${huecosLibres}<br>`);
          break;
  
        case "0":
          document.write("Saliendo del programa.<br>");
          break;
  
        default:
          document.write("Opcióninválida. Por favor, selecciona una opción válida.<br>");
          break;
      }
    } while (opcion !== "0");
  }
  
  // Ejecutar el menú
  mostrarMenu();