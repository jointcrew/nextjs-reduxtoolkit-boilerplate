import * as GoogleBooksSelectors from './googleBooks/selectors'
import { googleBookSlice, createActions } from './googleBooks/slice'

const GoogleBooksActions = {
  ...googleBookSlice.actions,
  ...createActions,
}

export { GoogleBooksSelectors, GoogleBooksActions }
