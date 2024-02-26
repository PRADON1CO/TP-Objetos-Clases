const libro = ["Cien añosd de soledad", "El señor de los anillos", "Don Quijote de la Mancha", "El Proceso"];

function buscar() {
  do {
    const libroBuscado = prompt(`Ingrese el nombre del libro a buscar:`);

    let encontrado = false; 

    for (let i = 0; i < libro.length; i++) {
      if (libro[i] === libroBuscado) {
        document.write(
          `<p>El libro ${libro[i]} sí se encuentra en nuestra biblioteca</p>`
        );
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      document.write(
        `<p>El libro ${libroBuscado} NO se encuentra en nuestra biblioteca</p>`
      );
    }
  } while (confirm(`Desea buscar otro libro?`));
}

function verificar() {
  const prestamo = ["Cien añosd de soledad", "El señor de los anillos"]; 

  do {
    const libroPrestamo = prompt(`Ingrese el nombre del libro para préstamo:`);

    let disponible = false; 

    for (let i = 0; i < prestamo.length; i++) {
      if (libroPrestamo === prestamo[i]) {
        document.write(
          `<p>El libro ${prestamo[i]} sí se encuentra disponible para préstamo</p>`
        );
        disponible = true;
        break;
      }
    }

    if (!disponible) {
      document.write(
        `<p>El libro ${libroPrestamo} NO se encuentra disponible para préstamo</p>`
      );
    }
  } while (confirm(`Desea buscar otro libro para préstamo?`));
}

function registro() {
  const estado = ["disponible", "disponible", "No disponible", "No disponible"];

  document.write("<p>...............................</p>");
  document.write("<p>Registro de disponibilidad: </p>");
  for (let i = 0; i < libro.length; i++) {
    const libroo = libro[i];
    document.write(`<p>${libroo} - ${estado[i]}</p>`);
  }
}

buscar();

verificar();

registro();