import { IAppState, IAppAction, AppTypeKeys } from '../actions/app'

const initialState: IAppState = { example: true }

const appReducer = (state: IAppState = initialState, action: IAppAction) => {
    switch (action.type) {
        case AppTypeKeys.KEY:
            return { ...state, example: false }
        default:
            return state
    }
}

export default appReducer
