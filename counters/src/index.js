import React from 'react'
import ReactDOM from 'react-dom'
import {
	createStore
} from 'redux'
import {
	Provider
} from 'react-redux'

import reducer from './reducers/reducer'
import './index.css'
import ControlPanel from './containers/ControlPanel'


const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
	    <ControlPanel />
	</Provider>,
	document.getElementById('root')
);