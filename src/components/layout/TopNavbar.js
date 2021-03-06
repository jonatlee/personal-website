import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Pdf from '../../assets/pdfs/resume-online.pdf';
class TopNavbar extends React.Component {
    render() {
        const linkStyle = {
            fontWeight: "500",
            color: "#FFFFFF",
            paddingLeft: "25px"
        }

        return ( 
            <Navbar className="nav-top" expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        <Nav.Link href={process.env.PUBLIC_URL + "/"} style={linkStyle}>Home</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#/about"} style={linkStyle}>About Me</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/#/projects"} style={linkStyle}>Projects</Nav.Link>
                        <Nav.Link href={Pdf} target="_blank" style={linkStyle}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavbar;