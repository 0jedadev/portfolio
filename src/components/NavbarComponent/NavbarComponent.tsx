import { Container, DivSocial, Line, Logo, ContainerNav } from "./styles"
import Burger from "./Burger";
import logo from "../../assets/logo.svg";
import Line10 from "../../assets/Line10.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function NavbarComponent() {
  return (
    <Container>
      <DivSocial>
        <Line src={Line10} />
        <a href="https://www.linkedin.com/in/0jedaa/" target="_blank">  <GitHubIcon style={{ color: "#ABB2BF"}}/></a>
        <a href="https://www.linkedin.com/in/0jedaa/" target="_blank"> <LinkedInIcon style={{ color: "#ABB2BF" }}/></a>
        <a href="mailto:jonatasojeda@gmail.com" target="_blank"><EmailIcon style={{ color: "#ABB2BF"}}/></a> 
      </DivSocial>
      <ContainerNav>
      <Logo src={logo} alt="Logo" />
      <Burger />
      </ContainerNav>
    </Container>
  );
}

export default NavbarComponent;
