'use client'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import gfm from 'remark-gfm';
import Image from 'next/image'
import { strapiBaseURL } from '@/lib/api'

const StyledMarkdown = styled(ReactMarkdown)`
    h1, h2, h3, h4, h5, h6 {
        margin-top: 25px;
        color: rgba(41, 41, 41, 1);
    }
    p, ol, li, img {
        margin-top: 5px;
        margin-bottom: 5px;
        color: rgba(41, 41, 41, 1);
    }
    p {
        font-weight: 400;
        word-wrap: break-word;
        color: rgba(41, 41, 41, 1);
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 50px;
        line-height: 32px;
        letter-spacing: -0.003em;
    }
    ol, ul {
        color: rgba(41, 41, 41, 1);
        margin-left: 18px;
        li {
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
        }
    }
    p:has(> img) {
        display: flex;
    }
`

const Markdown = ({ children }) => {
    const components = {
      img: ({node, ...props}) => {
        const url = `${strapiBaseURL}${props.src}`
        return <Image {...props} src={url} width={300} height={300} alt={props.alt} />
      },
    };
  
    return <StyledMarkdown components={components} remarkPlugins={[gfm]}>{children}</StyledMarkdown>
};
  

export default Markdown