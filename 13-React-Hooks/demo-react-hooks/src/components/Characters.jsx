import { getCharacters, cleanCharacters } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Characters = () => { //como hago yo desde mi componente funcional para hacer un dispatch de actions?  
    const dispatch = useDispatch(); //hay que accionarlo cuando se monta el componente
    const characters = useSelector(state => //para traerme los characters del estado global. Siempre lo recibe por arte de magia
        state.characters
    )

    useEffect(() => { //quiero que cuando se monte el componente se despache una actions, como la despacho?
        dispatch(getCharacters()) //asi despaché una action
        return () => dispatch(cleanCharacters()) //una buena manera de ahorrar memoria.Limpieza de estado(revisar componente actionsy reducer)
    }, [])

    return (
        <div>
            <h1>Este es Characters</h1>
            {
                characters?.map(character => {
                    return (
                        <div key = { character.id }>
                            <h3>{character.name}</h3>
                            <img style= {{borderRadius: '999999rem'}} src={character.image} alt={character.name}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Characters;

//1) importando a la action
//2) vamos a hacer dispatch en una linea con un hook
//que tenemos que importar, se llama: useDispatch que viene de react-redux
//3) como usamos useState así mismo usamos este hook
//4) se trae a useEffect para emular los ciclos de vida del componente
