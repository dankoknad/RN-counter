const initState = {
	resetBtn: false,
	addBtn: false,
	subtractBtn: false,
	slider: false
}

const toggleLock = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_RESET':
      return {...state, resetBtn: action.bool}
		case 'TOGGLE_ADD':
      return {...state, addBtn: action.bool}
		case 'TOGGLE_SUBTRACT':
      return {...state, subtractBtn: action.bool}
		case 'TOGGLE_SLIDER':
      return {...state, slider: action.bool}
    default:
      return state
  }
}

export default toggleLock