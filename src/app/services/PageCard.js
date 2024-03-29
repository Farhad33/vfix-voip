'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Typography from '@/common/Typography'


export default function PageCard({ title, content, urlImage })  {
  return (
    <CardContainer>
        <CardImage>
            <ImageStyle src={urlImage} alt={title} width={100} height={100}/>
        </CardImage>
      <CardTitle>
        <Typography variant='h4'>
          {title}
        </Typography>
      </CardTitle>
      <CardContent>
        <Typography variant='body3'>
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
  width: 65%;
  margin-bottom: calc(5vw + 10px);
  @media (max-width: 800px) {
       width: 80%;
    }
`;

const ImageStyle = styled(Image)`
    width: auto;
    height: auto;
`
const CardImage = styled.div`
    margin-bottom: 30px;

`
const CardTitle = styled.div`
  margin-bottom: 15px;
`;

const CardContent = styled.span`
    width: 90%;
`;