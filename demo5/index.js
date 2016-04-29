import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import { selectChange } from './reducer'
import PickerContainer from './container.js'

var reducers= combineReducers({selectChange})

var store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <PickerContainer />
  </Provider>,
  document.getElementById('demo5')
)
