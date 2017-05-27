
import { combineReducers } from 'redux'
import increment from './increment'
import result from './result'
import toggleLock from './toggleLock'
import resetBtnPosition from './resetBtnPosition'

const reducers = combineReducers({
  increment,
  result,
	isLocked: toggleLock,
	isResetBtnOnRightSide: resetBtnPosition
})

export default reducers