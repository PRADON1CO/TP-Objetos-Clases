const proyectos = ["Matematicas 1", "Fisica 1", "Paradigmas 2", "Programacion 3"];
const estados = ["en curso", "finalizado", "finalizado", "en curso"];
const responsables = ["Juan Perez", "Nico Roldan", "Eleonora Rodriguez", "Luciano Paez"];

function agregarProyecto() {
    const cantidad1 = parseInt(prompt('Cuántos proyectos desea agregar al array?'));
    for (let i = 0; i < cantidad1; i++) {
      const proyectoAgregar = prompt("<p>Ingrese el nombre del proyecto a agregar: </p>");
      proyectos.push(proyectoAgregar);

      const estado = prompt("Ingrese el estado del proyecto agregado:");
      estados.push(estado);

      const responsable = prompt("Ingrese un responsable:");
      responsables.push(responsable);
    }
}

function cambiarEstadoProyecto(nombreProyecto, nuevoEstado) {
    const index = proyectos.indexOf(nombreProyecto);
    if (index !== -1) {
      estados[index] = nuevoEstado;
      document.write(`<p>El estado del proyecto "${nombreProyecto}" ha sido actualizado a "${nuevoEstado}".</p>`);
    } else {
      document.write(`<p>No se encontró el proyecto "${nombreProyecto}".</p>`);
    }
  }

function responsableYresumen() {
  document.write(`<p>Resumen de proyectos en curso: </p>`);

  for (let i = 0; i < proyectos.length; i++) {
    if (estados[i] === "en curso") {
      document.write(`<p> ${proyectos[i]} - ${estados[i]} - ${responsables[i]}</p>`);
    }
  }
}

agregarProyecto();
cambiarEstadoProyecto('Fisica 1', 'en curso');
responsableYresumen();