const increment = (state = 4, action) => {
  switch (action.type) {
    case 'CHANGE_INCREMENT':
      return action.increment
    default:
      return state
  }
}

export default increment