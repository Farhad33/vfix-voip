'use client'
import styled from 'styled-components';
import Image from 'next/image';



export default function SuccessCard ({ title, content, urlImage })  {
  return (
    <CardContainer>
        <CardImage>
            <Image src={urlImage} alt={title} width={100} height={100} />
        </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const CardImage = styled.div`

`
const CardTitle = styled.h2`
  font-size: 22px;
`;

const CardContent = styled.p`
  font-size: 14px;
`;