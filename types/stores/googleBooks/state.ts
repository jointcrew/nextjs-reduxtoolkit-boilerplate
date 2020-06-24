import { VolumeList } from '~/types/apis/googleBooks'

export type State = {
  isSearching: boolean
  volumeList?: VolumeList
}
