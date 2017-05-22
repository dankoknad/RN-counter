
import { combineReducers } from 'redux'
import increment from './increment'
import result from './result'
import toggleLock from './toggleLock'

const reducers = combineReducers({
  increment,
  result,
	isLocked: toggleLock
})

export default reducers