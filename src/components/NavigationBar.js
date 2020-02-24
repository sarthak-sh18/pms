import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


class NavigationBar extends React.Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" >PMS</Navbar.Brand>
          <Nav pullRight className="ml-auto">
          <Nav.Link href="/get"class="block-example border border-secondary">View Product</Nav.Link>
          <Nav.Link href="/Post"class="nav1">Add Products</Nav.Link>
          <Nav.Link href="#"class="nav1">Modify Product</Nav.Link>
        </Nav>
      </Navbar>

    );
  }
}
export default NavigationBar;
