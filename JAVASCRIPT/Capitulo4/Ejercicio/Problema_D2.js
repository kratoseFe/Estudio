const obtenerInformacion = (materia) =>{
    let materias = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Dalto", "Pedro", "Pepito", "Juan"],
        logica: ["Rodriguez", "Pedro", "Pepito", "Juan", "Cofla", "Maria"],
        quimica: ["Halonso", "Pedro", "Pepito", "Juan", "Cofla", "Maria"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia, materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de  <b>${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
        los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno) =>{
    alumno.toLowerCase();
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases: </b> <b style='color:green'>${clasesPresentes}</b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("Cofla"));
document.write(cantidadDeClases("Maria"));