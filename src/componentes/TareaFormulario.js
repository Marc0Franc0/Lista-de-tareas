import React,{useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {
const [input, setInput]=useState('');

    const manejarEnvio = e => {
const tareaNueva = {
    id:'1',
    texto:'Hola'
}

    }

    const manejarCambio = e =>{
console.log('ESCRIBIENDO')

    }

    return (
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>

        </form>

    );

}
export default TareaFormulario;