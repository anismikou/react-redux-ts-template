import { createSelector } from 'reselect'
import { IRootState } from '../store/configureStore'

const getAppState = (state: IRootState) => state.app

export const navFocusableSelector = createSelector(getAppState, app => app.navFocusable)
