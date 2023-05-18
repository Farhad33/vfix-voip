import { useState, useEffect } from 'react'
import styled from 'styled-components'
import pricingSVG from '../assets/pricing-image.svg'
import { API } from '../util/API'

export default function Pricing() {
    const [plans, setPlans] = useState(dummyData)

    // useEffect(() => {
    //     API('/phone-plans')
    //     .then(response => {
    //         setPlans(response.data.data)
    //     })
    //     .catch(console.log)
    // }, [])

    console.log('plans => ', plans);

    return (
        <Container>
            <PricingImage src={pricingSVG} />
            <PlansContainer>
                {plans.map(plan => (
                    <PlanContainer key={plan.id}>
                        <PlanTopTitle>Most popular</PlanTopTitle>
                        <PlanName>{plan.attributes.planName}</PlanName>
                        <PlanCapabilities>{plan.attributes.capabilities}</PlanCapabilities>
                    </PlanContainer>
                ))}
            </PlansContainer>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 20px;
`
const PlansContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #00afef7e;
    border-radius: 20px;
    width: 80%;
    padding: 50px;
`
const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 50px;
    width: 285px;
    height: 781px;
    padding: 10px;
    border: 2px solid #26DDFD;
`
const PlanTopTitle = styled.h2`
    text-align: center;
    border-bottom: 2px solid #26DDFD;
    margin: 0 -10px 0 -10px;
    padding-bottom: 10px;
    color: #00AEEF;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
`
const PlanName = styled.h3`
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 20px;
`
const PlanCapabilities = styled.h3`
    font-size: 15px;
    font-weight: 300;
    line-height: 20px;
`
const PricingImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`


const dummyData = [
    {
        "id": 1,
        "attributes": {
            "planName": "Basic",
            "description": "The Basic plan includes only VOIP service, which provides businesses with high-quality voice communication over the internet. This plan is suitable for small businesses that need a reliable phone system without the added features.\n\n- ### first\n- second\n# title\n**Bold text**\n\n",
            "priceDescription": "/user/month/**",
            "capabilities": "Message, Phone",
            "pricing": {
                "month": {
                    "1-4": "32.95",
                    "5-19": "31.95",
                    "20-99": "27.95",
                    "100+": "26.95"
                },
                "year": {
                    "1-4": "30.95",
                    "5-19": "29.95",
                    "20-99": "25.95",
                    "100+": "24.95"
                }
            },
            "promotionMonth": 10,
            "promotionYear": 20,
            "createdAt": "2023-03-25T17:58:07.161Z",
            "updatedAt": "2023-03-25T17:58:14.475Z",
            "publishedAt": "2023-03-25T17:58:14.471Z"
        }
    },
    {
        "id": 2,
        "attributes": {
            "planName": "Premium",
            "description": "The Basic plan includes only VOIP service, which provides businesses with high-quality voice communication over the internet. This plan is suitable for small businesses that need a reliable phone system without the added features.\n\n- ### first\n- second\n# title\n**Bold text**\n\n",
            "priceDescription": "/user/month/**",
            "capabilities": "Message, Phone",
            "pricing": {
                "month": {
                    "1-4": "32.95",
                    "5-19": "31.95",
                    "20-99": "27.95",
                    "100+": "26.95"
                },
                "year": {
                    "1-4": "30.95",
                    "5-19": "29.95",
                    "20-99": "25.95",
                    "100+": "24.95"
                }
            },
            "promotionMonth": 10,
            "promotionYear": 20,
            "createdAt": "2023-03-25T17:58:38.799Z",
            "updatedAt": "2023-03-25T17:58:43.521Z",
            "publishedAt": "2023-03-25T17:58:43.518Z"
        }
    },
    {
        "id": 3,
        "attributes": {
            "planName": "Standard",
            "description": "The Basic plan includes only VOIP service, which provides businesses with high-quality voice communication over the internet. This plan is suitable for small businesses that need a reliable phone system without the added features.\n\n- ### first\n- second\n# title\n**Bold text**\n\n",
            "priceDescription": "/user/month/**",
            "capabilities": "Message, Phone",
            "pricing": {
                "month": {
                    "1-4": "32.95",
                    "5-19": "31.95",
                    "20-99": "27.95",
                    "100+": "26.95"
                },
                "year": {
                    "1-4": "30.95",
                    "5-19": "29.95",
                    "20-99": "25.95",
                    "100+": "24.95"
                }
            },
            "promotionMonth": 10,
            "promotionYear": 20,
            "createdAt": "2023-03-25T17:59:04.733Z",
            "updatedAt": "2023-03-25T17:59:06.460Z",
            "publishedAt": "2023-03-25T17:59:06.456Z"
        }
    }
]