import { ACTIONS_TYPE, CounterActionsType } from './actions'

const initialState = {
  startValue: 0,
  maxValue: 0,
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.CHANGE_MAX_VALUE:
    case ACTIONS_TYPE.CHANGE_START_VALUE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}