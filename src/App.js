import './App.css';
import Logo from './imagenes/logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">

      <div className='aplicacion-tareas'>

        <div className='logo-contenedor'>

          <img
            src={Logo}
            className='logo' 
            alt='Logo app'
            />
        </div>

        <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </div>

      </div>

    </div>
  );
}

export default App;
