
export const add = (result, increment) => {
  return {
    type: 'ADD',
    result: result + increment
  }
}

export const subtract = (result, increment) => {
  return {
    type: 'SUBTRACT',
    result: result - increment
  }
}

export const resetResult = (result, increment) => {
  return {
    type: 'RESET_RESULT',
    result: 0
  }
}

export const changeIncrement = (value) => {
  return {
    type: 'CHANGE_INCREMENT',
    increment: value
  }
}
