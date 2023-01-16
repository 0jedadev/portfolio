import { Container, DivImg, DivTitle, DivContent, Title, SubTitle, SubTitle2, ButtonStyle } from './styles'
import Button from '@mui/material/Button';

interface props {
    title: string,
    subtitle: string,
    subtitle2: string,
    imagem: string,
}


export function CardComponent(props: props) {
    return (
        <Container>
            <DivImg>

            </DivImg>
            <DivTitle>
                <SubTitle>{props.subtitle}</SubTitle>
            </DivTitle>
            <DivContent>
                <Title>{props.title}</Title>
                <SubTitle2>{props.subtitle2}</SubTitle2>
                <Button style={ButtonStyle} variant="outlined">View more</Button>
            </DivContent>
        </Container>
    )
}