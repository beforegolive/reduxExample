import { createStore, compose } from 'redux'
import Devtools from './devTools'
import rootReducer from './reducer'

const enhancer = compose(Devtools.instument())

export default function configureStore(initialState){
  const store =createStore(rootReducer, initialState, enhancer)

  return store
}
