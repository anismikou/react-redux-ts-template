export interface IAppState {
    example: boolean
}

export interface IAppAction {
    type: string
    payload?: any
}

export enum AppTypeKeys {
    KEY = 'KEY',
}

export const action = (): IAppAction => ({
    type: AppTypeKeys.KEY,
})
