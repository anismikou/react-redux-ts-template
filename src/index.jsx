import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './style/normalize.css'
import './style/main.css'

import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
