'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Typography from '@/common/Typography';
import { color } from '@/common/Theme';
import { Button } from '@/common/MainStyle';
import { useRouter } from 'next/navigation'


export default function Card({ title, btnText, urlImage, url })  {
  const { push } = useRouter()

  return (
    <CardContainer>
        <CardImage>
            <ImageStyle src={urlImage} alt={title} width={100} height={100}/>
        </CardImage>
        <CardContent>
            <CardTitle>
              <Typography variant='h4'>
                {title}
              </Typography>
            </CardTitle>
                <Button onClick={ () => {push(url)}}>
                    <Typography variant='body4'>
                        {btnText}
                    </Typography>
                </Button>
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
    margin-bottom: calc(2vw + 25px);
    box-shadow: 0px 6px 30px 5px ${color.Blue300};
    border-radius: 20px;
    padding: 20px 22px;
    @media (max-width: 800px) {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 20px 30px 20px 20px; */
`
const CardTitle = styled.div`
    padding-top: calc(1vw + 3px);
    margin-bottom: calc(1vw + 15px);
`;

