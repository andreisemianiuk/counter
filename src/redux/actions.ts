export enum ACTIONS_TYPE {
  CHANGE_START_VALUE = 'Counter/CHANGE_START_VALUE',
  CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_VALUE',
}

export type ChangeStartValueType = {
  type: ACTIONS_TYPE.CHANGE_START_VALUE,
  payload: { startValue: number }
}
export const ChangeStartValueAC = (startValue: number): ChangeStartValueType => {
  return {
    type: ACTIONS_TYPE.CHANGE_START_VALUE,
    payload: {startValue},
  }
}

export type ChangeMaxValueType = {
  type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
  payload: { maxValue: number }
}
export const ChangeMaxValueAC = (maxValue: number): ChangeMaxValueType => {
  return {
    type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
    payload: {maxValue},
  }
}

export type CounterActionsType = ChangeStartValueType | ChangeMaxValueType
