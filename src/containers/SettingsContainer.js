import { connect } from 'react-redux'
import { toggleAdd, toggleSubtract, toggleSlider } from '../actions'
import Settings from '../components/Settings'


const mapStateToProps = (state) => {
  return {
		isLocked: state.isLocked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleAdd: (bool) => {
      dispatch(toggleAdd(bool))
    },
		onToggleSubtract: (bool) => {
      dispatch(toggleSubtract(bool))
    },
		onToggleSlider: (bool) => {
      dispatch(toggleSlider(bool))
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Settings)

export default SettingsContainer