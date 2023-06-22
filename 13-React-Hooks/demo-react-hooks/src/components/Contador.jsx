/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from 'react'; //estado local y simulará ciclos de vida

const Contador = () => { //Estructura para componente funcional
    const [count, setCount] = useState(0);  //estado y funcion para modificar el estado. El hook useState retorna un array con 2 posiciones, las mencionadas antes. 
    
    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        setCount(count - 1)
    }

    useEffect(()=>{
        if(count === 5) setCount(0);
        if(count < 0) setCount(0);  
      }, [count]); //la dependencia estará atenta a count ya que es el que cambia

    return (
        <div>
            <h2>Contador</h2>
            <h3>{count}</h3>            
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Contador;