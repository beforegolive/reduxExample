import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.js'
import {createStore, combineReducers} from 'redux'
import {counterReducer, secondReducer} from './reducer.js'

var reducers=combineReducers({counterReducer,secondReducer})

const store = createStore(reducers)

function customRender(){
  var state = store.getState()
  console.log(state)
  ReactDOM.render(
    <div>
      <Counter
        value = {state.counterReducer.value}
        handleClick={()=> store.dispatch({type:'INCREMENT'})}
      />
      <Counter
        value = {state.counterReducer.otherValue}
        handleClick={()=> store.dispatch({type:'OTHER_INCREMENT'})}
      />
      <Counter
        value = {state.secondReducer.value}
        handleClick={()=> store.dispatch({type:'DOUBLE_INCREMENT'})}
      />
    </div>
    ,
    document.getElementById('demo2')
  )
}

customRender()
store.subscribe(customRender)
