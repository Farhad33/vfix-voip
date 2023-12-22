'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/common/Typography';
import { color } from '@/common/Theme';



export default function Cards({ title, content, urlImage })  {
  return (
    <CardContainer>
        <ImageStyle src={urlImage} alt={title} width={280} height={150}/>
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
  justify-content: flex-start;
  align-items: center;
  max-width: 300px;
  min-height: 550px;
  margin-bottom: calc(2vw + 25px);
  box-shadow: 0px 6px 30px 5px ${color.Blue300};
  border-radius: 20px;
`

const ImageStyle = styled(Image)`
  width: 100%;
  height: auto;
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