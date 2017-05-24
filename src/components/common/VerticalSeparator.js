import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export const VerticalSeparator = ({height, visible}) => (
	<View style={[{height}, visible ? background : null]} />
)

const background = {
	backgroundColor: '#ff8000'
}

VerticalSeparator.propTypes = {
	height: PropTypes.number,
	visible: PropTypes.bool
}

