'use client'
import styled from "styled-components";
import Typography from "@/common/Typography";
import { Button } from "@/common/MainStyle";
import { color } from "@/common/Theme";


export default function PricinCard({
    title,
    paragraph,
    discount_amount,
    discount_percent,
    price,
    captionBtn,
    items,
    contractLength
}) {

    return (
        <PricingCard>
            <CardContent>
                <Title>
                    <Typography variant='h3'>
                        {title}
                    </Typography>
                </Title>
                <Paragraph>
                    <Typography variant='body2'>
                        {paragraph}
                    </Typography>
                </Paragraph>
            </CardContent>
            <CardPrice>
                { contractLength === 'annually' ?
                    <Discount>
                        <LeftSide>
                            <Typography variant='body3'>
                                ${discount_amount}
                            </Typography>
                        </LeftSide>
                        <RightSide>
                            <Typography variant='body2'>
                                Save {discount_percent}%
                            </Typography>
                        </RightSide>
                    </Discount>
                    : ''
                }            
                <Payment>
                    <Period>
                        <Annually>
                            <Typography variant='h2'>
                                ${price}
                            </Typography>
                        </Annually>
                        <UserMonth>
                            <Typography variant='body3'>/User/Month</Typography>
                        </UserMonth>
                    </Period>
                    <Button>
                        {captionBtn}
                    </Button>
                </Payment>
                <ListItems>
                    {
                        items.map((item, indexItem) => (
                            <Item key={indexItem}>
                                <Typography variant='body3'>
                                    ✓{item}
                                </Typography>
                            </Item>
                        ))
                    }
                </ListItems>
            </CardPrice>
        </PricingCard>
    )
}

const PricingCard = styled.div`
    width: 100%;
    height: -webkit-fill-available; 
    border: none;
    box-shadow: 0px 6px 30px 0px ${color.Gray900};
    padding-top: calc(2vw + 15px);
    padding-bottom: calc(1vw + 5px);
    padding-right:calc(2vw + 14px);
    padding-left: calc(2vw + 14px);
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`
const CardContent = styled.div`

`

const Title = styled.div`
    color: ${color.Green200};
    padding-bottom: calc(1vw + 10px);
`
const Paragraph = styled.div`
    P {
        font-weight: 500;
        letter-spacing: 0.6px;
    }
`
const CardPrice = styled.div``

const Discount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: calc(1vw + 6px);
    padding-bottom: calc(1vw + -9px);
`
const LeftSide = styled.div`
    padding-right: calc(3vw + 40px);
    p{
        font-weight: 700;
        color: ${color.Gray400};
        text-decoration: line-through;
    }
`

const RightSide = styled.div`
    p {
        font-weight: 700;
        color: ${color.Blue200};
    }
`


const Payment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: calc(2vw + 10px);
`
const Period = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: calc(1vw + 6px);
`
const Annually = styled.div`
    color: ${color.Green200};
`
const UserMonth = styled.div`
    p {
        font-weight: 500;
    }
`

const StyledButton = styled(Button)`
    width: 75%;
`
const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: calc(1rem + 4px);
    @media (max-width: 700px) {
        row-gap: calc(1rem + 18px);
    }
`
const Item = styled.div`
    p {
        display: flex;
        flex-direction: row;
    }
`
const Icons = styled.div`
    padding-right: 8px;
    svg {
        font-size: 20px;
    }
`