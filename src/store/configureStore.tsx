import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import { IAppState } from './actions/app'

export interface IRootState {
    app: IAppState
}

export default function configureStore() {
    const reducer = combineReducers({ app })
    const enhancers = composeWithDevTools({ trace: true, traceLimit: 25 })
    const store = createStore(reducer, enhancers())
    return store
}
