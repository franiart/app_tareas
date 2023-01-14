const tareas = [
    {
        Titulo: 'Estudiar html',
        Estado: 'Terminado'
    },

    {
        Titulo: 'Estudiar css',
        Estado: 'En progreso'
    },

    {
        Titulo: 'Estudiar js',
        Estado: 'Pendiente'
    },

    {
        Titulo: 'Practicar js',
        Estado: 'En progreso'
    },

]

//MOSTRAR LISTADO DE TAREAS
console.log(tareas)

//FUNCIÓN PARA AGREGAR TAREAS
const agregarTarea = (titulo, estado) =>{
    return {
        titulo: titulo,
        estado: estado
    }
}
tareas.push(agregarTarea('Estudiar Python', 'En progreso'));
console.log(tareas)

//LISTAR TAREAS
let mostrarTareas = (estado) => {

    if (estado === "En progreso" || estado === "Pendiente" || estado === "Terminado") {
        let tarea = tareas.filter(tareas => tareas.Estado === estado);
            return tarea;
    } else {
        return tareas;
    }
}

console.log(mostrarTareas("Pendiente"))
console.log(mostrarTareas("En progreso"))
console.log(mostrarTareas("Terminado"))
console.log(mostrarTareas("dujshadhasik"))

//AGREGAR VERIFICACIÓN
const agregarTarea2 = (titulo, estado) => {
    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].Titulo === titulo) {
            return `ERROR: El titulo "${titulo}" ya se encuentra en la lista de tareas`;
        }
    }
    tareas.push({ Titulo: titulo, Estado: estado });
    return tareas;
} 

console.log(agregarTarea2('Estudiar html', 'Terminado'))
console.log(agregarTarea2('Practicar CSS', 'Terminado'))

//EXISTE TAREA?
const existeTarea = (titulo) => {
    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].Titulo === titulo) {
            return tareas[index]
        }
    }
} 
console.log(existeTarea('Estudiar html'))

