
const eliminarTarea = async(idTarea)=> {
    return console.log(idTarea)
    fetch( `http://localhost:4000/taks/${id}`)
    

}

document.getElementById('eliminarTarea').addEventListener('click', eliminarTarea)