import { connect } from 'react-redux'
import { add } from '../actions'
import Home from '../components/Home'


const mapStateToProps = (state) => {
  return {
		result: state.result,
		increment: state.increment
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    onAdd: () => {
      dispatch(add(state.result, state.increment))
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default SettingsContainer