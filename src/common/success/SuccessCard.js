'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '../Typography';



export default function SuccessCard ({ title, content, urlImage })  {
  return (
    <CardContainer>
        <CardImage>
            <Image src={urlImage} alt={title} width={100} height={100}  style={{width: '40%', height: 'auto'}}/>
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
  width: 85%;
  margin-bottom: 35px;
  @media (max-width: 768px) {
       width: 40%;

    }
`;

const CardImage = styled.div`

`
const CardTitle = styled.div`
  margin-bottom: 10px;
`;

const CardContent = styled.span`

`;