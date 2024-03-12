class SistemaTareas {
    constructor() {
        this.tareas = []
    }


    agregar_tarea() {
    
        let desc = prompt("Ingrese la descripcion de la tarea")
        while (desc == "") {
            desc = prompt("Por favor ingrese la descripcion de la tarea")
        }

        let urg = Number( prompt("Ingrese el nivel de urgencia (de 1 a 3)"))
        while (isNaN(urg) || (urg < 1 || urg > 3)) {
            alert("Por favor ingrese un dato correcto")
            urg = Number( prompt("Ingrese el nivel de urgencia (de 1 a 3)"))
        }


        this.tareas.push(new Tarea(desc, urg))
    }

    listar_tareas() {
        
        this.tareas.sort((a,b)=> b.urgencia - a.urgencia)

        let lista = ""
        this.tareas.forEach((tarea)=> {
            lista += `${tarea.descripcion} - ${tarea.urgencia}\n`
        })
        alert(lista)

    }

} 