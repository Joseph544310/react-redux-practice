import React from 'react'
import {connect} from 'react-redux'
import * as factsActions from '../actions/factsActions'

const FactsList = props => {

    return (
        <div>
            <h1>FactsList</h1>
            <ul>
                {props.facts.map((fact, index) => <li key={index}>{fact}</li>)}
            </ul>  
            <button onClick={() => props.fetchFact()}>Fetch Fact</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        facts: state.facts.facts
    }
}

export default connect(mapStateToProps, factsActions)(FactsList)