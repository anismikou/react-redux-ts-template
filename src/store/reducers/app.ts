import { IAppState, IAppAction, AppTypeKeys } from '../actions/app-actions'

const initialState: IAppState = {
    navFocusable: true,
}

const appReducer = (state: IAppState = initialState, action: IAppAction) => {
    switch (action.type) {
        case AppTypeKeys.NAV_FOCUSABLE:
            return { ...state, navFocusable: true }
            break
        case AppTypeKeys.NAV_UNFOCUSABLE:
            return { ...state, navFocusable: false }
            break
        default:
            return state
    }
}

export default appReducer
