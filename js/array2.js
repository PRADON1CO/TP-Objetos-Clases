const Estudiantes = ["Nicolas", "Fidel", "Lucas", "Ariel"];

const notasEstudiantes = [
    [7, 8, 6],
    [5, 6, 5],
    [8, 9, 7],
    [6, 7, 4]
];

function calcularPromedioNotasEstudiante(notas) {
    let totalNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        totalNotas += notas[i];
    }
    return totalNotas / notas.length;
}

function mostrarResumenAprobadosReprobados(nombres, notas) {
    const aprobados = [];
    const reprobados = [];

    for (let i = 0; i < nombres.length; i++) {
        let promedio = calcularPromedioNotasEstudiante(notas[i]);
        if (promedio >= 6) {
            aprobados.push(nombres[i]);
        } else {
            reprobados.push(nombres[i]);
        }
    }
    document.write(`<p>Los esptudiantes que aprobaron son: ${aprobados}</p>`);
    document.write(`<p>Los esptudiantes que desaprobaron son: ${reprobados}</p>`);

}


mostrarResumenAprobadosReprobados(Estudiantes, notasEstudiantes);
