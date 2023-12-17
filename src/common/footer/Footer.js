'use client'
import Typography from "../Typography";
import { Data } from "../Data";
import { FooterContainer, FooterTop, FooterLeftSide, FooterRightSide, ListContainer, ListUl, ListLi, FooterLogo, Address, FollowUs, FollowUsTitle, FollowUsImages, MobileApp, MobileTitle, MobileImage, FooterBottom, CopyRight, Privecy, PrivecyTag, FooterLogoContent, BackgroundImage, ImagStyle } from './FooterStyle'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Footer() {
    const { push } = useRouter()

    return(  
        <FooterContainer>
            <FooterTop>
                <FooterLeftSide>
                    <FooterLogo>
                        <ImagStyle
                            src={Data.footer.logoFooter} 
                            alt={Data.footer.logoName} 
                            width={300}
                            height={70}
                        />
                    </FooterLogo>
                    <FooterLogoContent>
                        <Address>
                            <Typography variant='body2'>{Data.footer.address}</Typography>
                            <Typography variant='body2'>{Data.footer.phone}</Typography>
                        </Address>
                        <FollowUs>
                            <FollowUsTitle>
                                <Typography variant='h3'>
                                    {Data.footer.social}
                                </Typography>
                            </FollowUsTitle>
                            <FollowUsImages>
                                {
                                    Data.footer.imgs.map((image, index) =>(
                                        <BackgroundImage 
                                            key={index}
                                            onClick={() => { push(image.link) }}
                                        >
                                            <Image  src={image.img} width={15} height={15} alt={image.alt} />
                                        </BackgroundImage>
                                    ))
                                }
                                
                            </FollowUsImages>
                        </FollowUs>
                        <MobileApp>
                            <MobileTitle>
                                <Typography variant='h3'>
                                    {Data.footer.app}
                                </Typography>
                            </MobileTitle>
                            <MobileImage>
                                {
                                    Data.footer.appImges.map((app, index) => (
                                        <BackgroundImage 
                                            key={index}
                                            onClick={() => {window.location.assign(app.link)}}
                                        >
                                            <Image  src={app.img} width={15} height={15} alt={app.alt} />
                                        </BackgroundImage>
                                    ))
                                }
                            </MobileImage>
                        </MobileApp>
                    </FooterLogoContent>
                </FooterLeftSide>
                <FooterRightSide>
                    { Data.footer.lists.map((section, colIndex) => (
                        <ListContainer key={colIndex} >
                            <Typography variant='h3'>{section.title}</Typography>
                            <ListUl>
                                { section.list.map(({ name, link }, itemIndex) => (
                                    <ListLi key={itemIndex} onClick={() => { push(link) }} >
                                        <Typography variant='body4'>{name}</Typography>
                                    </ListLi>
                                ))}
                            </ListUl>
                        </ListContainer>
                    )) }
                </FooterRightSide>
            </FooterTop>
            <FooterBottom>
                {Data.footer.footerEnd.list.map((lists, index) => (
                    <Typography key={index} variant='overLine'>
                        {lists}
                    </Typography>
                ))}
            </FooterBottom>
        </FooterContainer>
    )
}