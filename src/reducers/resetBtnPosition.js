const resetBtnPosition = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_RESET_BTN_POSITION':
      return action.bool // boolean is primitive value and is immutable, so we are not mutating state here
    default:
      return state
  }
}

export default resetBtnPosition