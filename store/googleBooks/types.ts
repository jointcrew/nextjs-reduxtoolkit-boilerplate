import { VolumeList } from '~/types/apis/googleBooks'

export const FETCH_VOLUMES = 'googleBook/fetchVolumes'
export const STOP_FETCH_VOLUMES = 'googleBook/stopFetchVolumes'

export type State = {
  isSearching: boolean
  volumeList?: VolumeList
}
