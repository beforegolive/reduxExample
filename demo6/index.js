import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import { selectChange } from './reducer'
import Container from './container.js'

var reducers= combineReducers({selectChange})

var store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('demo5')
)
