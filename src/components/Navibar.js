import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


export default function Navibar(props) {
  console.log ('chloe',props)
    
  return (
    // <Navbar bg="dark" variant="dark">
    //      <Navbar.Brand href="#home">
    //       <img
    //         alt=""
    //         src="/logo.svg"
    //         width="30"
    //         height="30"
    //         className="d-inline-block align-top"/> 
    //       React Bootstrap
    //      </Navbar.Brand>
        // <Form inline>
        // <FormControl type="text" placeholder="Search" className="mr-sm-2 float-right"/>
        // <Button variant="outline-primary float-right">Search</Button>
        // </Form>
    // </Navbar> 

  <Navbar fixed="top"  collapseOnSelect expand="lg" bg="transparent" >
  <Navbar.Brand href="#home" > CHLOE'S MOVIE WORLD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
    <Form>
    <FormControl type="text" placeholder="Seach movie" className="mr-sm-2 float-right inputSearch" onChange={e => props.handleSearch(e.target.value)}/>
    </Form>
    <Button variant="outline-light search"> SEARCH </Button>    
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
    )
}

