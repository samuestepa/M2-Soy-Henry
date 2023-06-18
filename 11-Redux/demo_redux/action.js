const { AUMENTAR_COUNT, CAMBIAR_INSTRUCTOR, MODIFICAR_ALUMNOS } = require('/action-types')

const aumentarCount = () => {
    return {type: AUMENTAR_COUNT}};
const cambiarInstructor = () => {
    return {type: CAMBIAR_INSTRUCTOR, 
    payLoad: 'Dai'  }
};
const modificarAlumos = () => {
    return {type: MODIFICAR_ALUMNOS, payLoad: ['pablo', 'camilo', 'luis']}
};

module.exports = {
    aumentarCount,
    cambiarInstructor,
    modificarAlumos,
} 