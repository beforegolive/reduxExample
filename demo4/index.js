import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore} from 'redux'
import Picker from './picker'
import Reducer from './reducer'

const store = createStore(Reducer)
ReactDOM.render(
  <Provider store={store}>
    <Picker />
  </Provider>,
  document.getElementById('demo4')
)
