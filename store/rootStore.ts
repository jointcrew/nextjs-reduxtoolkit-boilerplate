import { configureStore } from '@reduxjs/toolkit'

import { createLogger } from 'redux-logger'
const logger = createLogger({ collapsed: true })
import epicMiddleware, { rootEpic } from '~/store/rootEpic'
import rootReducer from '~/store/rootReducer'

export const setupStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware: [epicMiddleware, logger],
  })
  epicMiddleware.run(rootEpic)

  return store
}

export const makeStore = (initialState: any) => {
  const store = setupStore(initialState)
  return store
}
