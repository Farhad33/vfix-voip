import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import gfm from 'remark-gfm';
import { StrapiBaseURL } from '../utility/api'

const StyledMarkdown = styled(ReactMarkdown)`
    font-family: 'Source Serif Pro', serif;
    h1, h2, h3, h4, h5, h6 {
        margin-top: 25px;
        margin-bottom: 25px;
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
        margin-top: 2em;
        line-height: 32px;
        letter-spacing: -0.003em;
        margin-bottom: -0.46em;
    }
    img {
        width: 100%;
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
`

const Markdown = ({ children }) => {
    const components = {
      img: ({node, ...props}) => {
        const url = StrapiBaseURL + props.src
        return <img {...props} src={url} />
      },
    };
  
    return <StyledMarkdown components={components} remarkPlugins={[gfm]} children={children} />;
};
  

export default Markdown