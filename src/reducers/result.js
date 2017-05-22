const result = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return action.result
		case 'SUBTRACT':
      return action.result
		case 'RESET_RESULT':
      return action.result
    default:
      return state
  }
}

export default result