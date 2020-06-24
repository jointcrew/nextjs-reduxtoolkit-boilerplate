import React from 'react'

import { Props } from '~/types/components/GoogleBooks/SearchResult'
import { Volume } from '~/types/apis/googleBooks'

export const SearchResult: React.FC<Props> = (props: Props) => {
  if (!props.volumeList.items || props.volumeList.items.length === 0) {
    return <div>There is no data.</div>
  }
  return (
    <div>
      {props.volumeList.items.map((item: Volume, index: number) => {
        return <div key={index}>{item.volumeInfo.title}test</div>
      })}
    </div>
  )
}
