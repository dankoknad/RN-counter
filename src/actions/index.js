
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

export const toggleReset = (bool) => {
  return {
    type: 'TOGGLE_RESET',
    bool
  }
}

export const toggleAdd = (bool) => {
  return {
    type: 'TOGGLE_ADD',
    bool
  }
}

export const toggleSubtract = (bool) => {
  return {
    type: 'TOGGLE_SUBTRACT',
    bool
  }
}

export const toggleSlider = (bool) => {
  return {
    type: 'TOGGLE_SLIDER',
    bool
  }
}

export const changeResetBtnPosition = (bool) => {
  return {
    type: 'CHANGE_RESET_BTN_POSITION',
    bool
  }
}

export const swapButtons = (bool) => {
  return {
    type: 'SWAP_BUTTONS',
    bool
  }
}