'use client'
import { useEffect, useState } from'react'
import Styled from'styled-components'
import Image from 'next/image'
import Typography from "@/common/Typography"
import { strapiAPI, strapiBaseURL } from '@/lib/api'
import Markdown from "@/common/Markdown"


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

  return (
    <BlogsContainer>
        <Title variant='h2'>{data?.attributes?.title}</Title>
        <Image 
            src={imageUrl}
            width={300}
            height={300}
            alt={data?.attributes?.thumbnail?.title}
        />
        <Markdown>{data?.attributes?.markdown}</Markdown>
    </BlogsContainer>
  )
}

const BlogsContainer = Styled.div`
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
const Title = Styled(Typography)`
    margin-bottom: 20px;
`