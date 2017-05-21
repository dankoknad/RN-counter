
import { combineReducers } from 'redux'
import increment from './increment'
import result from './result'

const reducers = combineReducers({
  increment,
  result
})

export default reducers