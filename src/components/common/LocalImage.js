import React from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions } from 'react-native';

export const LocalImage = ({source, originalWidth, originalHeight}) => {
	const windowWidth = Dimensions.get('window').width
	const widthChange = (windowWidth - 30) / originalWidth
	const newWidth = originalWidth * widthChange
	const newHeight = originalHeight * widthChange

	return (
		<Image 
			source={source}
			style={{width: newWidth, height: newHeight}}
		/>
	)	
};

LocalImage.propTypes = {
	source: PropTypes.number,
	originalWidth: PropTypes.number,
	originalHeight: PropTypes.number
}

