'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/common/Typography';
import { color } from '@/common/Theme';



export default function Cards({ title, content, urlImage })  {
  return (
    <CardContainer>
        <CardImage>
            <ImageStyle src={urlImage} alt={title} width={280} height={150}/>
        </CardImage>
        <CardContent>
            <CardTitle>
              <Typography variant='h4'>
                {title}
              </Typography>
            </CardTitle>
            <Cardparagraph>
              <Typography variant='body4'>
                {content}
              </Typography>
            </Cardparagraph>
        </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: -webkit-fill-available;
  margin-bottom: calc(2vw + 25px);
  box-shadow: 0px 6px 30px 5px ${color.Blue300};
   @media (max-width: 800px) {
       width: 80%;
    }
`;

const ImageStyle = styled(Image)`
  max-width: 100%;
  
`
const CardImage = styled.div`
  margin-bottom: 10px;
    @media (max-width: 800px) {
      margin-bottom: 8px;
    }

`

export const CardContent = styled.div`
  padding: 20px 30px 20px 20px;
`
const CardTitle = styled.div`
  margin-bottom: calc(1vw + 6px);
`;

const Cardparagraph = styled.div`
   p {
    color: ${color.Blue50};
   }
`;