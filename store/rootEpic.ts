import { createEpicMiddleware, combineEpics } from 'redux-observable'

import GoogleBookEpics from './googleBooks/epics'

export const rootEpic = combineEpics(...GoogleBookEpics)

const epicMiddleware = createEpicMiddleware()

export default epicMiddleware
