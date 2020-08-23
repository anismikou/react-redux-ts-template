import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(urlParams: string) {
    const reducer = combineReducers({})
    const enhancers = composeWithDevTools({ trace: true, traceLimit: 25 })
    const store = createStore(reducer, enhancers())
    return store
}
