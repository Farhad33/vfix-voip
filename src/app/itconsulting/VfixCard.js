'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/common/Typography';
import { color } from '@/common/Theme';



export default function Cards({ title, content, urlImage })  {
  return (
    <CardContainer>
        <CardImage>
            <ImageStyle src={urlImage} alt={title} width={90} height={90}/>
        </CardImage>
      <CardTitle>
        <Typography variant='h4'>
          {title}
        </Typography>
      </CardTitle>
      <CardContent>
        <Typography variant='subline4'>
          {content}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin-bottom: calc(2vw + 25px);
  box-shadow: 0px 6px 30px 5px ${color.Blue300};
  padding: 25px 25px 60px 25px;
  @media (max-width: 800px) {
       width: 80%;
    }
`;

const ImageStyle = styled(Image)`
    max-width: 100%;
    height: auto;
`
const CardImage = styled.div`
    margin-bottom: 30px;
    @media (max-width: 800px) {
      margin-bottom: 8px;
    }

`
const CardTitle = styled.div`
  margin-bottom: 15px;
`;

const CardContent = styled.div`
    width: 90%;
    p {
      color: ${color.Blue50};
    }
`;