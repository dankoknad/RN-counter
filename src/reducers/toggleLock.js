const initState = {
	addBtn: false,
	subtractBtn: false,
	slider: false
}

const toggleLock = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD':
      return {...state, addBtn: !state.addBtn}
		case 'TOGGLE_SUBTRACT':
      return {...state, subtractBtn: !state.subtractBtn}
		case 'TOGGLE_SLIDER':
      return {...state, slider: !state.slider}
    default:
      return state
  }
}

export default toggleLock