const { AUMENTAR_COUNT, CAMBIAR_INSTRUCTOR, MODIFICAR_ALUMNOS } = require('/action-types')

const initialState = {
    count: 0,
    instructor: '',
    cohorte: '',
    alumnos: []
}
const reducer = (state = initialState, action) => {
   
    switch(action.type){
        case AUMENTAR_COUNT:
            return { 
                ...state,
                count: state.count + 1
            }
        case CAMBIAR:INSTRUCTOR:
            return {
                ...state,
                instructor: action.payLoad
            }
        case MODIFICAR_ALUMNOS:
            return {
                ...state,
                alumnos: action.payLoad
            }

        default:
            return {...state}
    } 
}
module.exports = reducer;