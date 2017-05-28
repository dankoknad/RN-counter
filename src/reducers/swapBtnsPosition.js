const swapBtnsPosition = (state = false, action) => {
  switch (action.type) {
    case 'SWAP_BUTTONS':
      return action.bool // boolean is primitive value and is immutable, so we are not mutating state here
    default:
      return state
  }
}

export default swapBtnsPosition