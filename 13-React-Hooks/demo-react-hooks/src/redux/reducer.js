import { GET_CHARACTER } from "./action-type";

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

            default:
                return{...state}
        }
}

export default rootReducer;