import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import Counter from './counter.js'
import Reducer from './reducer.js'

const store = createStore(Reducer)

function customRender(){
  ReactDOM.render(
    <Counter
      value = {store.getState()}
      handleClick={()=> store.dispatch({type:'INCREMENT'})}
    />,
    document.getElementById('demo1')
  )
  console.log(store.getState())
}

customRender()
store.subscribe(customRender)
