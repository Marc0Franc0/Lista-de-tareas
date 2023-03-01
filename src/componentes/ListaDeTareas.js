import React,{useState} from "react";
import TareaFormulario from '../componentes/TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from '../componentes/Tarea';

function ListaDeTareas(){

const[tareas, setTareas]=useState([]);

const agregarTarea = tarea =>{

console.log("Tarea agregada");
console.log(tarea);
}

return (

<>
<TareaFormulario />
<div className='tareas-lista-contenedor'>
{
    tareas.map(
        (tarea)=>
        <Tarea 
        texto={tarea.texto}
        completada={tarea.completada} />
    )
}
</div>
</>

);

}

export default ListaDeTareas;