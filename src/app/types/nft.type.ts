export interface NftType {
  title: string
  subtitle?: string
  subtitles: string[]
  links: {
    opensea: NftLink
  }
  images: {
    hero: NftImage
  }
  sections: NftSection[]
  imgSectionCards: NftImageSectionCard[]
}

export interface NftLink {
  href: string
  label: string
}

export interface NftImage {
  file: string
  alt: string
}

export interface NftSection {
  title: string
  subtitle: string
  cards: NftSectionCard[]
}

export interface NftSectionCard {
  title: string
  subtitle: string
  description: string
}

export interface NftImageSectionCard {
  img: string
  title: string
  description: string
}
