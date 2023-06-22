import { GET_CHARACTER, CLEAN_CHARACTERS } from "./action-type"; //siempre se importan los types
//Middleware hace esta funcion, está implicito
export const getCharacters = () => {
    return function(dispatch){ //siempre recibe por arte de magia a dispatch
        fetch('https://rickandmortyapi.com/api/character/') //se hace la peticion con fetch
        .then(response => response.json())                //para trasformar a javascript
        .then(data => dispatch({ type: GET_CHARACTER, payload: data.results })) //OBLIGATORIO (excepto el .results, eso se hizo porque la appi tiene la informacion guardad en un array toda la info en forma de objetos, y como no queremos otra cosa solo pediremos ese solo array)
    }
}
//data es objeto, results es propiedad de ese objeto

export const cleanCharacters = () => {
    return { type: CLEAN_CHARACTERS }
}