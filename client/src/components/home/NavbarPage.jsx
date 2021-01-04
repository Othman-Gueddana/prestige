import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import image from "../../photos/prestige.jpg"
class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <img src={image} id="image" alt="" />
                <MDBNavbar color="black" dark expand="md">
                    <MDBNavbarBrand>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem >
                                <MDBNavLink className="text" to="/">𝑨𝒄𝒄𝒆𝒖𝒊𝒍</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="text" to="/collection">𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="text" to="#!">𝑵𝒐𝒖𝒗𝒆𝒂𝒖𝒕é</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                <MDBNavLink className="text-contact" to="/contact">𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒆𝒛-𝒏𝒐𝒖𝒔</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default NavbarPage;