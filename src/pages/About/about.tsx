
import { Container } from './styles';
import { AboutComponent } from '../../components/AboutComponent/AboutComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';


function AboutPage() {
    return (
        <Container>
            <NavbarComponent/>
            <AboutComponent />
        </Container>
    )
}

export default AboutPage
