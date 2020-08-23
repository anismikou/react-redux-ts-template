export interface IAppState {
    navFocusable: boolean
}

export interface IAppAction {
    type: string
    payload?: any
}

export enum AppTypeKeys {
    NAV_FOCUSABLE = 'NAV_FOCUSABLE',
    NAV_UNFOCUSABLE = 'NAV_UNFOCUSABLE',
}

export const navFocusable = (): IAppAction => ({
    type: AppTypeKeys.NAV_FOCUSABLE,
})

export const navUnfocusable = (): IAppAction => ({
    type: AppTypeKeys.NAV_UNFOCUSABLE,
})
