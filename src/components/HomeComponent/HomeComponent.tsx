import logoEu from "../../assets/Eu.png";
import { Container, Title, Logo, DivLogo, DivText, SubTitle, Text, DivButton, ButtonStyle, DivPhrase, ContainerDiv, FrameImg, SubText, FrameImg2 } from './styles';
import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import Frame from "../../assets/Frame.svg";
export function HomeComponent() {
    return (
        <Container>
            <ContainerDiv>
                <DivText>
                    <Title>Jônatas Ojeda is a <span>web designer</span> and <span>front-end developer</span></Title>
                    <SubTitle>He crafts responsive websites where technologies meet creativity</SubTitle>
                    <DivButton>
                        <Button style={ButtonStyle} variant="outlined" endIcon={<GetAppIcon />}>Download CV</Button>
                    </DivButton>
                </DivText>
                <DivLogo>
                    <Logo src={logoEu} />
                </DivLogo>
            </ContainerDiv>
            <DivPhrase>
                <FrameImg src={Frame} />
                <Text>With great power comes great electricity bill</Text>
                <FrameImg2 src={Frame} />
                <SubText>- Dr. Who</SubText>
            </DivPhrase>
        </Container>

    )
}