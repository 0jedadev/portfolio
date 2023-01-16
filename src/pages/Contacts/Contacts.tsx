import React from 'react'
import { Container } from './styles';
import { ContactsComponent } from '../../components/ContactsComponent/ContactsComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';



function ContactsPage() {
    return (
        <Container>
            <NavbarComponent/>
            <ContactsComponent />
        </Container>
    )
}

export default ContactsPage
