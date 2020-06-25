import { State } from 'types/stores/googleBooks/state'

export const initialState: State = {
  isSearching: false,
  volumeList: {
    kind: 'string',
    totalItems: 0,
    items: [],
  },
  error: '',
}
