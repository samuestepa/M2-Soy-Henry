import { CLEAN_CHARACTERS, GET_CHARACTER } from "./action-type";

const initialState = {
     characters: [],
     characterDetails: {} //esto no, aqui va lo que se necesite, el resto no es opcional.
}

const rootReducer = (state = initialState, action) => {
        switch(action.type){
            case GET_CHARACTER: //que pasa si se despacha la action del componente actions
                return {
                    ...state,
                    characters: action.payload
                }
            case CLEAN_CHARACTERS:
                return {
                    ...state,
                    characters: []
                }

            default:
                return{...state}
        }
}

export default rootReducer;