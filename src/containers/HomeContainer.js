import { connect } from 'react-redux'
import { add, subtract, resetResult, changeIncrement } from '../actions'
import Home from '../components/Home'


const mapStateToProps = (state) => {
  return {
		result: state.result,
		increment: state.increment,
		isLocked: state.isLocked,
		isResetBtnOnRightSide: state.isResetBtnOnRightSide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (result, increment) => {
      dispatch(add(result, increment))
    },
		onSubtract: (result, increment) => {
      dispatch(subtract(result, increment))
    },
		onResetResult: () => {
      dispatch(resetResult())
    },
		onIncrementChange: (value) => {
			dispatch(changeIncrement(value))
		}
  }
}

const HomeContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Home)

export default HomeContainer