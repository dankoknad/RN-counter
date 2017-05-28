
import { combineReducers } from 'redux'
import increment from './increment'
import result from './result'
import toggleLock from './toggleLock'
import resetBtnPosition from './resetBtnPosition'
import swapBtnsPosition from './swapBtnsPosition'

const reducers = combineReducers({
  increment,
  result,
	isLocked: toggleLock,
	isResetBtnOnRightSide: resetBtnPosition,
	isSwapBtnsPositionOn: swapBtnsPosition
})

export default reducers