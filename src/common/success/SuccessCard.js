'use client'
import styled from 'styled-components';
import Typography from '../Typography';
import SVGComponents from "@/common/SVGComponents"


export default function SuccessCard ({ title, content, svg })  {
  const SVGComponent = SVGComponents[svg]
  return (
    <CardContainer>
        <CardImage>
            <SVGComponent />
        </CardImage>
      <CardTitle>
        <Typography variant='h4'>
          {title}
        </Typography>
      </CardTitle>
      <CardContent>
        <Typography variant='body2'>
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
  @media (max-width: 700px) {
       width: 47%;
       svg {
        width: 70%;
       }
  }
`;

const CardImage = styled.div`

`
const CardTitle = styled.div`
  margin-bottom: 10px;
`;

const CardContent = styled.span`

`;