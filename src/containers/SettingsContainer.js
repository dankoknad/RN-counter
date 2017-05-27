import { connect } from 'react-redux'
import { toggleReset, toggleAdd, toggleSubtract, toggleSlider, changeResetBtnPosition } from '../actions'
import Settings from '../components/Settings'


const mapStateToProps = (state) => {
  return {
		isLocked: state.isLocked,
		isResetBtnOnRightSide: state.isResetBtnOnRightSide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleReset: (bool) => {
      dispatch(toggleReset(bool))
    },
		onToggleAdd: (bool) => {
      dispatch(toggleAdd(bool))
    },
		onToggleSubtract: (bool) => {
      dispatch(toggleSubtract(bool))
    },
		onToggleSlider: (bool) => {
      dispatch(toggleSlider(bool))
    },
		onChangeResetBtnPosition: (bool) => {
      dispatch(changeResetBtnPosition(bool))
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Settings)

export default SettingsContainer