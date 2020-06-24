import { configureStore, Middleware } from '@reduxjs/toolkit'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'

import epicMiddleware, { rootEpic } from '~/store/rootEpic'
import rootReducer from '~/store/rootReducer'
import { RootState } from '~/types/stores/root'

const logger = createLogger({ collapsed: true })
const onlyDevMiddlewares = new Array<Middleware>()

if (process.env.NODE_ENV === `development`) {
  onlyDevMiddlewares.push(logger)
}

export const setupStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware: [...onlyDevMiddlewares, epicMiddleware],
  })
  epicMiddleware.run(rootEpic)

  return store
}

export const makeStore: MakeStore<RootState> = (initialState) => {
  const store = setupStore(initialState)
  return store
}

export const wrapper = createWrapper<RootState>(makeStore, { debug: true })
