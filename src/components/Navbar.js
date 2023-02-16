import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Navbar=()=>{
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" fixed="top" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">{"NAME"}</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  ABOUT US
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/about/mission">Our Mission</MDBDropdownItem>
                  <MDBDropdownItem link href="/about/team">Our Team</MDBDropdownItem>
                  <MDBDropdownItem link href="/about/board">Board of Directors</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  GET INVOLVED
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/donate">Donate</MDBDropdownItem>
                  <MDBDropdownItem link href="/support/fundraise">Fundraise</MDBDropdownItem>
                  <MDBDropdownItem link href="/support/volunteer">Volunteer</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">
                CONTACT US
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn color="warning" href="/donate">DONATE</MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;