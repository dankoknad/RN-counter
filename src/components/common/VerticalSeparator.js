import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export const VerticalSeparator = ({height, visible, fill}) => (
	<View style={[
		{height}, 
		fill && {backgroundColor: fill}
	]} />
)

VerticalSeparator.propTypes = {
	height: PropTypes.number,
	visible: PropTypes.bool
}
