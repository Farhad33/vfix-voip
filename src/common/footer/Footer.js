import Typography from "../Typography";
import { Data } from "../Data";
import {ContainerFooter, FooreContainer, FooterLeftSide, FooterRightSide,ListContainer, ListColumn, ListTitle, ListUl, ListLi, FooterLogo, Address, FollowUs, FollowUsTitle, FollowUsImages, MobileApp, MobileTitle, MobileImage, FooterEndContainer, CopyRight, Privecy, PrivecyTag, FooterLogoContent, BackgroundImage, ImagStyle} from './FooterStyle'
import Image from "next/image";

export default function Footer() {
    return(  
        <ContainerFooter>
            <FooreContainer>
                <FooterLeftSide>
                    <FooterLogo>
                        <ImagStyle src={Data.footer.logoFooter} alt={Data.footer.logoName} width={300}
                        height={70} layout="responsive"/>
                    </FooterLogo>
                    <FooterLogoContent>
                        <Address>
                            <Typography variant='body2'>
                                {Data.footer.address}
                            </Typography>
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
                                        <BackgroundImage key={index}>
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
                                        <BackgroundImage key={index}>
                                            <Image  src={app.img} width={15} height={15} alt={app.alt} />
                                        </BackgroundImage>
                                    ))
                                }
                            </MobileImage>
                        </MobileApp>
                    </FooterLogoContent>
                </FooterLeftSide>
                <FooterRightSide>
                    {
                        Data.footer.lists.map((section, colIndex) => (
                            <ListContainer key={colIndex} >
                                <ListColumn>
                                    <ListTitle>
                                        <Typography variant='h4'>
                                            {section.title1}
                                        </Typography>
                                    </ListTitle>
                                    <ListUl>
                                        {
                                            section.list1.map((item, itemIndex) => (
                                                <ListLi key={itemIndex}>
                                                    <Typography variant='overLine'>
                                                        {item}
                                                    </Typography>
                                                </ListLi>
                                            ))
                                        }
                                    </ListUl>
                                </ListColumn>
                                <ListColumn>
                                    <ListTitle>
                                        <Typography variant='h4'>
                                                {section.title2}
                                        </Typography>
                                    </ListTitle>
                                    <ListUl>
                                        {
                                            section.list2.map((item, itemIndex) => (
                                                <ListLi key={itemIndex}>
                                                   <Typography variant='overLine'>
                                                        {item}
                                                    </Typography>
                                                </ListLi>
                                            ))
                                        }
                                    </ListUl>
                                </ListColumn>
                            </ListContainer>
                        ))
                    }
                </FooterRightSide>
            </FooreContainer>
            <FooterEndContainer>
                    <CopyRight>
                            <Typography variant='overLine'>
                                {Data.footer.footerEnd.copyRight}
                            </Typography>
                    </CopyRight>
                    <Privecy>
                        {
                            Data.footer.footerEnd.list.map((lists, index) => (
                                <PrivecyTag key={index}>
                                    <Typography variant='body3'>
                                        {lists}
                                    </Typography>
                                </PrivecyTag>
                            ))
                        }
                    </Privecy>
                </FooterEndContainer>
        </ContainerFooter>
    )
}