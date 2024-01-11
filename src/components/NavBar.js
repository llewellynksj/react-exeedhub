import { Nav, Navbar, Image, Container } from "react-bootstrap";
import logo from "../assets/exeedhublogo.webp";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import LoggedOutNav from "./LoggedOutNav";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import LoggedInNav from "./LoggedInNav";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const { ref, expanded, setExpanded } = useClickOutsideToggle();

  return (
    <Navbar expanded={expanded} expand="lg">
      <Container>
        {/* Logo */}

        <Nav.Link to="/">
          <Navbar.Brand>
            <Image src={logo} height="48vh" />
          </Navbar.Brand>
        </Nav.Link>

        {/* Burger menu */}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? <LoggedInNav /> : <LoggedOutNav />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
