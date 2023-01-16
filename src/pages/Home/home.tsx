import React from 'react'
import { Container } from './styles';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { HomeComponent } from '../../components/HomeComponent/HomeComponent';
import ProjectsPage from '../Projects/projects';
import AboutPage from '../About/about';
import ContactsPage from '../Contacts/Contacts';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { ProjectsComponent } from '../../components/ProjectsComponent/ProjectsComponent';
import { AboutComponent } from '../../components/AboutComponent/AboutComponent';
import { ContactsComponent } from '../../components/ContactsComponent/ContactsComponent';
import { SkillsComponent } from '../../components/SkillsComponent/SkillsComponent';


function HomePage() {
    return (
        <Container>
          <NavbarComponent/>
          <HomeComponent/>
          <ProjectsComponent/>
          <SkillsComponent/>
          <AboutComponent/>
          <ContactsComponent/>
          <FooterComponent/>
        </Container>
    )
}

export default HomePage
