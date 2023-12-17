'use client'
import { DownloadCard, Content, Photo, ContentImg, DownloadTitle, DownloadParagraph, DownloadRightSide, DownloadLeftSide, MobileApp } from './DownloadStyle'
import Image from 'next/image'
import Typography from '@/common/Typography'
import { useRouter } from 'next/navigation'



export default function Downloadcard ({ card })  {
  const { push } = useRouter()

  return (
    <DownloadCard color={card.color} >
      <DownloadLeftSide color={card.color}>
        <DownloadTitle>
          <Typography variant='h1'>{card.title}</Typography>
        </DownloadTitle>
        <Typography variant='body4'>{card.paragraph}</Typography>
        <Typography variant='h3'>{card.listTitle}</Typography>
        <ul>
          {card.list.map((item, index) => (
            <li key={index}>
              <Typography variant='body4'>{item}</Typography>
            </li>
          ))}
        </ul>
        <MobileApp>
            <Image
              src= {card.img1}
              width={120}
              height={35}
              alt= {card.title}
              onClick={() => { push(card.urlImage1) }}
            />
            <Image
              src= {card.img2}
              width={120}
              height={35}
              alt= {card.title}
              onClick={() => { push(card.urlImage2) }}
            />
        </MobileApp>
      </DownloadLeftSide>
      <DownloadRightSide>
        <Image
          src={card.img}
          width={650}
          height={650}
          alt= {card.title}
          quality={75}
        />
      </DownloadRightSide>
    </DownloadCard>
  )
}
