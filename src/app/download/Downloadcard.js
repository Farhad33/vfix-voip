import { DownloadCard, Content, Photo, ContentImg, DownloadTitle, DownloadParagraph, DownloadRightSide, DownloadLeftSide, MobileApp } from './DownloadStyle'
import Image from 'next/image'
import Typography from '@/common/Typography'




export default function Downloadcard ({ card })  {
  return (
    <DownloadCard color={card.color} >
      <DownloadLeftSide color={card.color}>
        <DownloadTitle>
          <Typography variant='h1'>{card.title}</Typography>
        </DownloadTitle>
        <DownloadParagraph>
          <Typography variant='body2'>{card.paragraph1}</Typography>
          <Typography variant='body2'>{card.paragraph2}</Typography>
        </DownloadParagraph>
        <MobileApp>
            <Image
              src= '/Download/AppStore.png'
              width={120}
              height={35}
              alt= {card.title}
            />
            <Image
              src= '/Download/GooglePlay.png'
              width={120}
              height={35}
              alt= {card.title}
            />
        </MobileApp>
      </DownloadLeftSide>
      <DownloadRightSide>
        <Image
          src={card.img}
          width={650}
          height={650}
          alt= {card.title}
          layout="responsive"
          quality={75}
        />
      </DownloadRightSide>
    </DownloadCard>
  )
}
