export type VolumeList = {
  kind: string
  totalItems: number
  items?: Volume[]
}

export type Volume = {
  id: number
  selfLink: string
  volumeInfo: VolumeInfo
}

export type VolumeInfo = {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  // publishedDate: Dayjs;
  description: string
  imageLinks: ImageLinks
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export type ImageLinks = {
  smallThumbnail: string
  thumbnail: string
}
