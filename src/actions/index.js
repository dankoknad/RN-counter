
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

// TOGGLE_ADD
export const toggleAdd = (bool) => {
  return {
    type: 'TOGGLE_ADD',
    bool: bool
  }
}

// TOGGLE_SUBTRACT
export const toggleSubtract = (bool) => {
  return {
    type: 'TOGGLE_SUBTRACT',
    bool: bool
  }
}

// TOGGLE_SLIDER
export const toggleSlider = (bool) => {
  return {
    type: 'TOGGLE_SLIDER',
    bool: bool
  }
}