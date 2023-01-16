import React from 'react'
import { Container } from './styles';
import { ProjectsComponent } from '../../components/ProjectsComponent/ProjectsComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';



function ProjectsPage() {
    return (
        <Container>
            <NavbarComponent/>
         <ProjectsComponent/>
        </Container>
    )
}

export default ProjectsPage
