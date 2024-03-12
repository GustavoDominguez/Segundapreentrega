let sistema_tareas = new SistemaTareas()

while (true) {

    let opc = prompt(`Ingrese una opcion
    1. agregar tarea
    2. Enlistar tareas
    0. Salir del sistema`)

    if (opc == "1") {
        sistema_tareas.agregar_tarea()
    } else if (opc == "2") {
        sistema_tareas.listar_tareas()
    } else if (opc == "0") {
        alert("Saliendo del sistema")
        break
    }

}