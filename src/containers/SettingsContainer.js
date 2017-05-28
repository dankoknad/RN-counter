import { connect } from 'react-redux'
import { toggleReset, toggleAdd, toggleSubtract, toggleSlider, changeResetBtnPosition, swapButtons } from '../actions'
import Settings from '../components/Settings'


const mapStateToProps = (state) => {
  return {
		isLocked: state.isLocked,
		isResetBtnOnRightSide: state.isResetBtnOnRightSide,
		isSwapBtnsPositionOn: state.isSwapBtnsPositionOn
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
    },
		onSwapButtons: (bool) => {
      dispatch(swapButtons(bool))
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Settings)

export default SettingsContainer