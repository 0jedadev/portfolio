import { Container, Title, DivTitle, DivText,Text, ButtonStyle } from './styles'
import Line7 from "../../assets/Line7.svg"
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
export function AboutComponent() {
    return (
        <Container>
            <DivTitle>
                <div>
                    <Title><span>#</span>about-me</Title>
                    <img src={Line7} />
                </div>
            </DivTitle>
            <DivText>
                <Text>Hello, i’m Jônatas!</Text><br/>
                <Text>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </Text><br/>
                <Text>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Text>
                <Button style={ButtonStyle} variant="outlined" endIcon={<TrendingFlatIcon />}>Read more</Button>
            </DivText>
        </Container>
    )
}