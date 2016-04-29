import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.js'
import {createStore, combineReducers, bindActionCreators} from 'redux'
import {counterReducer, secondReducer} from './reducer.js'
import * as actionCreators from './action.js'

var reducers=combineReducers({counterReducer,secondReducer})

const store = createStore(reducers)

var boundActionCreators = bindActionCreators(actionCreators, store.dispatch)

function customRender(){
  var state = store.getState()
  ReactDOM.render(
    <div>
      <Counter
        value = {state.counterReducer.value}
        handleClick={boundActionCreators.incremment}
      />
      <Counter
        value = {state.counterReducer.otherValue}
        handleClick={boundActionCreators.otherIncremment}
      />
      <Counter
        value = {state.secondReducer.value}
        handleClick={boundActionCreators.doubleIncremment}
      />
    </div>
    ,
    document.getElementById('demo3')
  )
}

customRender()
store.subscribe(customRender)
