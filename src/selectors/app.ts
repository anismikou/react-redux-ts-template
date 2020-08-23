import { createSelector } from 'reselect'
import { IRootState } from '../store/configureStore'

const getAppState = (state: IRootState) => state.app

export const exampleSelector = createSelector(getAppState, app => app.example)
