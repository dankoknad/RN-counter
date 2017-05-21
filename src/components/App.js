import React, { Component } from 'react';
import {View} from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers'
import {Navigation} from './Navigation'

const initState = {
	result: 5,
	increment: 2
}

const store = createStore(reducers, initState)



export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}