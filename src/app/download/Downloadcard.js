import { DownloadCard, Content, Photo, ContentImg } from './styled'
import Image from 'next/image'




export default function Downloadcard ({ card })  {
  return (
    <DownloadCard color={card.color} >
      <Content color={card.color}>
        <h1>{card.title}</h1>
        <p>{card.paragraph1}</p>
        <p>{card.paragraph2}</p>
        <ContentImg>
          <span>
            <Image
              src= '/download/image42.png'
              width={156}
              height={40}
              alt= {card.title}
              quality={100}
            />
          </span>
          <span>
            <Image
              src= '/download/image43.png'
              width={156}
              height={40}
              alt= {card.title}
              quality={100}
            />
          </span>
        </ContentImg>
      </Content>
      <Photo>
        <Image
          src={card.img}
          width={10000}
          height={0}
          alt= {card.title}
          quality={100}
      />
      </Photo>
    </DownloadCard>
  )
}
