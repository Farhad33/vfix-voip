'use client'
import { useEffect, useState } from'react'
import Styled from'styled-components'
import { strapiAPI } from '@/lib/api'
import BlogBox from './BlogBox'


export default function Blogs() {
  const [data,  setData] = useState([])
  const url = '/articles-msps?populate=services,thumbnail'
  
  useEffect(() => {
    strapiAPI(url)
    .then(response => setData(response.data.data))
    .catch(error => console.log('error => ', error))
  }, [])

  return (
    <BlogsContainer>
        {data.map((content, index) => (
            <BlogBox key={index} content={content}/>
        ))}
    </BlogsContainer>
  )
}

const BlogsContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
    gap: 70px;
`