import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import Logo from '../../assets/images/sprout-logo.svg';
import Profile from '../../assets/images/profile-placeholder.svg';

import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="xl" variant="dark" className="navbar-sprout">
      <Navbar.Brand href="#home">
        <Image src={Logo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <NavDropdown title="My Requests">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="My Team" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Company" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Administration Tools" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Maintenance" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Form className='search-form d-flex align-items-center'>
            <Form.Control
              type="search"
              placeholder="employee search"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar-sprout-icons' style={{ color: "#70787E", fontSize: "27px" }} />
          </Form>
          <NavItem className="d-none d-xl-flex">
            <FontAwesomeIcon icon={faBell} className='navbar-sprout-icons' style={{ color: "#70787E", fontSize: "25px" }} />
          </NavItem>
          <NavItem className="d-none d-xl-flex">
            <Image src={Profile}/>
          </NavItem>
          <NavDropdown title="Admin" className='navbar-admin-item mx-0'>
            <NavDropdown.Item href="#">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="d-xl-none">
              Notifications
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;