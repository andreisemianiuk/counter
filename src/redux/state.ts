import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counterReducer'
import { loadState, saveState } from '../utils/local-storage'
import throttle from 'lodash.throttle'

const reducers = combineReducers({
  counter: counterReducer,
})

export type IGlobalState = ReturnType<typeof reducers>

export const store = createStore(reducers, loadState())

store.subscribe(throttle(() => {
  saveState({
    counter: store.getState().counter,
  })
}))