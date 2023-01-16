import { Container, Title, DivTitle, DivText, Text, DivContact, DivContent, SubTitle, DivSocial } from './styles'
import Line7 from "../../assets/Line7.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export function ContactsComponent() {
    return (
        <Container>
            <DivTitle>
                <div>
                    <Title><span>#</span>contacts</Title>
                    <img src={Line7} />
                </div>
            </DivTitle>
            <DivContent>
                <DivText>
                    <Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Text>
                </DivText>
                <DivContact>
                    <SubTitle>Message me here</SubTitle>
                    <DivSocial>
                        <div>
                            <GitHubIcon style={{ color: "#ABB2BF" }} />
                            <Text>Ola</Text>
                        </div>
                        <div>
                            <LinkedInIcon style={{ color: "#ABB2BF" }} />
                            <a href="https://www.linkedin.com/in/0jedaa/" target="_blank"><Text>www.linkedin.com/in/0jedaa/</Text></a> 
                        </div>
                        <div>
                            <EmailIcon style={{ color: "#ABB2BF" }} />
                            <a href="mailto:jonatasojeda@gmail.com" target="_blank"><Text>jonatasojeda@gmail.com</Text></a>
                        </div>
                    </DivSocial>
                </DivContact>
            </DivContent>
        </Container>
    )
}