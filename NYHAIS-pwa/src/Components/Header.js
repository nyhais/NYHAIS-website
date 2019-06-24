import React from 'react';
import { 
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button } from 'react-bootstrap';

/*
on click new window for links
*/

export class Header extends React.Component {

  render() {
    const slackLink = 'https://bit.ly/NYHAIS-Slack';
    const meetupLink= 'https://meetup.com/nyhais/';

    const handleClick = (url, name) => {
      window.open(url, name);
    }

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => handleClick(meetupLink, 'Meetup')}>Meetup</Nav.Link>
            <Nav.Link onClick={() => handleClick(slackLink, 'Slack')}>Slack</Nav.Link>
            <Nav.Link href="#jobs">Jobs</Nav.Link>            
            <NavDropdown title="More Stuff" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
