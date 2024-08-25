'use client'
import styled from 'styled-components'
import Typography from "@/common/Typography"
import { useRouter } from 'next/navigation'

export default function BlogBox({ content }) {
    const { push } = useRouter()
    const formatDate = (dateString) => 
        new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        let urlTitle = content?.attributes?.title.toLowerCase().replace(/\s/g, '-')

    return (
        <ArticleBox onClick={() => push(`/blog/${content?.id}/${urlTitle}`)}>
            <Thumbnail 
                src={`https://strapi.myvfix.com${content?.attributes?.thumbnail?.data?.attributes?.url}`} 
                alt={content?.attributes?.thumbnail?.data?.attributes?.alternativeText}
            />
            <TextBox>
                <Typography variant='body5'>{formatDate(content?.attributes?.createdAt)}</Typography>
                <Typography variant='h5'>{content?.attributes?.title}</Typography>
            </TextBox>
        </ArticleBox>
    )
}

const ArticleBox = styled.div`
    width: 400px;
    height: auto;
    border-radius: 15px;
    position: relative;
    @media screen and (max-width: 400px) {
        width: 300px;
        height: auto;
    }
    cursor: pointer;
`
const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 7px 8px -1px rgba(0,0,0,0.5);
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    width: 80%;
    padding: 20px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    span {
        color: #949494;
    }
    h5 {
        margin-top: 10px;
        &:before {
            content: '\2022';
            margin-right: 5px;
        }
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
                line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`