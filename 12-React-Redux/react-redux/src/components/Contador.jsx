import React from "react";
import { connect } from 'react-redux'; 
import { aumentarContador } from "../redux/actions";

class Contador extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    
    render(){
        return(
            <>
                 <h1>Contador:</h1>
                 <h3>{this.props.contador}</h3>
                 <button onClick={this.props.aumentarContador}>AUMENTAR</button>
            </>
        )
    }
}

const mapStateToProps= (state) =>{
    return {
        contador: state.contador
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        aumentarContador: () => dispatch(aumentarContador())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contador);