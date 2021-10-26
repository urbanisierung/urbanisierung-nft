import { NftType } from '../types/nft.type'

export const SkunkWorksNft: NftType = {
  title: `Skunk Works`,
  subtitle: `Generation 2`,
  subtitles: [
    `0/2k minted`,
    `launching around 2021/10/30`,
    `subscribe to get notified!`,
  ],
  links: {
    opensea: {
      href: `https://opensea.io/collection/skunk-works`,
      label: `Buy on OpenSea`,
    },
  },
  images: {
    hero: {
      file: `skunk-gen2.png`,
      alt: `Skunk Works NFT Generation 2 Hero Image`,
    },
  },
  sections: [
    {
      title: `Ten different properties`,
      subtitle: `Filter your Skunk Works by different properties.`,
      cards: [
        {
          title: `Beard`,
          subtitle: `Hipster or Fluffy`,
          description: `It's the cozy zone in your face.`,
        },
        {
          title: `Cigarette`,
          subtitle: `Cigarette or Pipe`,
          description: `Smoking?`,
        },
        {
          title: `Hair`,
          subtitle: `Afro or Punk`,
          description: `Show your beautiful hair style!`,
        },
        {
          title: `Hat`,
          subtitle: `Clown / Silk / Viking / Cap / Silly`,
          description: `What's your accessoiries for your head?`,
        },
        {
          title: `Mask`,
          subtitle: `Medical or Gas Mask`,
          description: `Hello Covid!`,
        },
        {
          title: `Mustache`,
          subtitle: `Flat or Quirky`,
          description: `No more words, sir`,
        },
        {
          title: `Sunglasses`,
          subtitle: `Ray or Round or Colorful`,
          description: `Not only needed at locations where the sun is burning!`,
        },
        {
          title: `Tie`,
          subtitle: `Bow or Tie`,
          description: `Extravaganza!`,
        },
        {
          title: `Pixelsize`,
          subtitle: `Random size between 10 and 30`,
          description: `How much do you like Pixels??`,
        },
        {
          title: `Background`,
          subtitle: `Just one color`,
          description: `I bet your favorite color is available`,
        },
      ],
    },
    {
      title: `Four major pricing steps`,
      subtitle: `Be fast and get your skunk work very cheap!`,
      cards: [
        {
          title: `0.005 ETH`,
          subtitle: `#10001 - #10500`,
          description: `First 500 skunk works will be at an very cheap price so you can grab your NFT without big costs.`,
        },
        {
          title: `0.01 ETH`,
          subtitle: `#10501 - #11500`,
          description: `In this badge the price increases to 0.01 ETH`,
        },
        {
          title: `0.05 ETH`,
          subtitle: `#11501 - #11900`,
          description: `Those 400 skunk works will be selled for 0.1 ETH`,
        },
        {
          title: `0.1 ETH`,
          subtitle: `#11901 - #12000`,
          description: `In the final round the last 100 skunk works gen2 will be selled for 0.1 ETH`,
        },
      ],
    },
  ],
  imgSectionCards: [
    {
      img: `skunk10437.png`,
      title: `Skunk Works #10437`,
      description: `Punk Skunk!`,
    },
    {
      img: `skunk10799.png`,
      title: `Skunk Works #10799`,
      description: `Smoking Afro Skunk!`,
    },
    {
      img: `skunk11461.png`,
      title: `Skunk Works #11461`,
      description: `Excellent Viking Skunk!`,
    },
    {
      img: `skunk11601.png`,
      title: `Skunk Works #11601`,
      description: `Hipster Skunk!`,
    },
  ],
}
