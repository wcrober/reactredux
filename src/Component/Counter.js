import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
    constructor(){
        super()

    }

    render() {

        return(
            <div className="div_container">
                <h1 className="counter">{this.props.ctr}</h1>
                <button onClick={() => this.props.incrementCounter()}>Increment</button>
                <button onClick={() => this.props.decrementCounter()}>Decrement</button>
                <button onClick={() => this.props.addCounterTen()}>Add 10</button>
                <button onClick={() => this.props.minusCounterTen()}>Subtract 10</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        ctr: state.counter
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch({type: 'INC_COUNTER'}),
        decrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
        addCounterTen: () => dispatch({type: 'ADD_TEN', value: 10}),
        minusCounterTen: () => dispatch({type: 'MINUS_TEN', value:10})
        
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)