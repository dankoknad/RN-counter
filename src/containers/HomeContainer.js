import { connect } from 'react-redux'
import { add, subtract, changeIncrement } from '../actions'
import Home from '../components/Home'


const mapStateToProps = (state) => {
  return {
		result: state.result,
		increment: state.increment
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