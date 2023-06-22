import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [show, setShow] = useState(true);

  const toggel = () => {    //para mostrarlo siempre que sea true
    setShow(!show)
  }


  return (  //el onClick del button de toggel para  activarle la funcion al button
    <div className="App"> 
      <button onClick={toggel}>{show ? 'HIDE' : 'SHOW'}</button>   
      {show && <Contador/>}
      <Characters/>
    </div>
  ); //&& = doble amperson, y dice "si show está en true entonces se ejecuta contador". Montado y desmontado de componente
}

export default App;
