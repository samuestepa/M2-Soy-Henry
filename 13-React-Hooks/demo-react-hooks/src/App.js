import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [show, setShow] = useState({
    contador: true,
    characters: true
  });

  const toggel = (event) => {    //para mostrarlo siempre que sea true. 
    setShow({
      ...show,
      [event.target.name]: !show[event.target.name] //siempre que se hace el onClick se lanza un evento, asi que por eso hay que ingresar al evento (objeto) y mirar en target(objeto) la propiedad name y así saber que cambios se le van a hacer
    })
  }

  return (  //el onClick del button de toggel para  activarle la funcion al button
    <div className="App"> 
      <button onClick={toggel} name = 'contador'>{show.contador ? 'HIDE' : 'SHOW'}</button>   
      {show.contador && <Contador/>}
      <button onClick={toggel} name = 'characters'>{ show.characters ? 'HIDE' : 'SHOW'}</button>
      {show.characters && <Characters/>}
    </div>
  ); //&& = doble amperson, y dice "si show está en true entonces se ejecuta contador". Montado y desmontado de componente
}

export default App;
