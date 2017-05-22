const increment = (state = 5, action) => {
	console.log(action);
  switch (action.type) {
    case 'CHANGE_INCREMENT':
      return action.increment
    default:
      return state
  }
}

export default increment