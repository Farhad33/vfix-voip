import Typography from "../Typography";
import { Data } from "../Data";
import {ContainerFooter, FooreContainer, FooterLeftSide, FooterRightSide,ListContainer, ListColumn, ListTitle, ListUl, ListLi, FooterLogo, Address, FollowUs, FollowUsTitle, FollowUsImages, MobileApp, MobileTitle, MobileImage, FooterEndContainer, CopyRight, Privecy, PrivecyTag, FooterLogoContent, BackgroundImage} from './FooterStyle'
import Image from "next/image";

export default function Footer() {
    return(  
        <ContainerFooter>
            <FooreContainer>
                <FooterLeftSide>
                    <FooterLogo>
                        <Image src={Data.footer.logoFooter} alt={Data.footer.logoName} width={300}
                        height={70} />
                    </FooterLogo>
                    <FooterLogoContent>
                        <Address>
                            <Typography variant='p' component='p'>
                                {Data.footer.address}
                            </Typography>
                        </Address>
                        <FollowUs>
                            <FollowUsTitle>
                                <Typography variant='p' component='body1'>
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
                                <Typography variant='p' component='body1'>
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
                                    <ListTitle>{section.title1}</ListTitle>
                                    <ListUl>
                                        {
                                            section.list1.map((item, itemIndex) => (
                                                <ListLi key={itemIndex}>
                                                    {item}
                                                </ListLi>
                                            ))
                                        }
                                    </ListUl>
                                </ListColumn>
                                <ListColumn>
                                    <ListTitle>{section.title2}</ListTitle>
                                    <ListUl>
                                        {
                                            section.list2.map((item, itemIndex) => (
                                                <ListLi key={itemIndex}>
                                                    {item}
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
                            <Typography variant='p' component='overLine'>
                                {Data.footer.footerEnd.copyRight}
                            </Typography>
                    </CopyRight>
                    <Privecy>
                        {
                            Data.footer.footerEnd.list.map((lists, index) => (
                                <PrivecyTag key={index}>
                                    {lists}
                                </PrivecyTag>
                            ))
                        }
                    </Privecy>
                </FooterEndContainer>
        </ContainerFooter>
    )
}