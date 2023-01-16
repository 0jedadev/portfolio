import { Container, Logo, DivContent, Text, SubText, FirstContent, SecondContent, SubText1, ThirdContent } from './styles'
import Line7 from "../../assets/Line7.svg"
import Button from '@mui/material/Button';
import logo from "../../assets/logo.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export function FooterComponent() {
    return (
        <Container>
            <DivContent>
                <FirstContent>
                    <div>
                        <Logo src={logo} />
                        <a href="mailto:jonatasojeda@gmail.com" target="_blank"><Text>jonatasojeda@gmail.com</Text></a>
                    </div>
                    <SubText1>Media</SubText1>
                </FirstContent>


                <SecondContent>
                    <SubText>Web designer and front-end developer based in Ukraine</SubText>
                    <div>
                        <a href="mailto:jonatasojeda@gmail.com" target="_blank"><GitHubIcon style={{ color: "#ABB2BF", marginLeft: "10px" }} /></a>
                        <a href="https://www.linkedin.com/in/0jedaa/" target="_blank"><LinkedInIcon style={{ color: "#ABB2BF", marginLeft: "10px" }} /></a>
                        <a href="mailto:jonatasojeda@gmail.com" target="_blank"><EmailIcon style={{ color: "#ABB2BF", marginLeft: "10px" }} /></a>
                    </div>
                </SecondContent>
                <ThirdContent>
                    <p>© Copyright 2023. Made by Jônatas</p>
                </ThirdContent>
            </DivContent>

        </Container>
    )
}