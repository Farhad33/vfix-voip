'use client'
import { useEffect, useState } from'react'
import Head from 'next/head'
import Script from 'next/script'
import styled from 'styled-components';
import Image from 'next/image'
import Typography from "@/common/Typography"
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { strapiAPI, strapiBaseURL } from '@/lib/api'
import Markdown from "@/common/Markdown"
import generateFAQScript from './generateFAQScript'



export default function Blog({ id }) {
  const [data,  setData] = useState([])
  const endPoint = `/articles-msps/${id}?populate=thumbnail`
  const imageUrl = `${strapiBaseURL}${data?.attributes?.thumbnail?.data?.attributes?.url}`

  useEffect(() => {
    if(id) {
        strapiAPI(endPoint)
        .then(response => setData(response.data.data))
        .catch(error => console.log('error => ', error))
    }
  }, [id])

  if(data.length === 0) return <h1>loading ...</h1>
  const faqScript = generateFAQScript(data?.attributes?.faq)

  return (
    <>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqScript) }}
            />
        </head>
        <BlogsContainer>
            <Title variant='h2'>{data?.attributes?.title}</Title>
            <Image 
                src={imageUrl}
                width={300}
                height={300}
                alt={data?.attributes?.thumbnail?.data?.attributes?.alternativeText}
            />
            <Markdown>{data?.attributes?.markdown}</Markdown>
            <AccordionContainer itemScope itemProp="mainEntity">
                <Typography variant='h3'>FAQ</Typography>
                {data?.attributes?.faq.map(({ answer, question}, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            itemType="https://schema.org/Question"
                        >
                            <Typography variant='h5' itemProp="name">{question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <Typography itemProp="text">{answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </AccordionContainer>
        </BlogsContainer>
    </>
  )
}
const AccordionContainer = styled.div`
    margin-top: 30px;
    h3 {
        margin-bottom: 20px;
    }
`
const BlogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 80%;
    @media (max-width: 600px) {
        width: 100%;
    }
    img {
        margin: auto;
        width: calc(25vw + 250px);
        height: auto;
        border-radius: 20px;
        box-shadow: 0px 7px 8px -1px rgba(0,0,0,0.5);
    }
`
const Title = styled(Typography)`
    margin-bottom: 20px;
`