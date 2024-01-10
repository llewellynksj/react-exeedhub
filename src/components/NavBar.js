import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, NavItem, Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/exeedhublogo.webp";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        {/* Logo */}

        <NavLink to="/">
          <Navbar.Brand>
            <Image src={logo} height="48vh" />
          </Navbar.Brand>
        </NavLink>

        {/* Burger menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Dropdown Nav Item - Schools */}
            <NavDropdown
              title={
                <span
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Schools
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Primary
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Secondary
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Sixth Form/College
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Add a Review
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Nav Item - Discussion */}
            <NavDropdown
              title={
                <span
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Discussion
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                  to="/discussion/popular"
                >
                  Popular Threads
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Browse Topics
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Post New Thread
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Nav Item - Pre-loved */}
            <NavDropdown
              title={
                <span
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Pre-loved
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  New Items
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  Browse Categories
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
                >
                  List an Item
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Account Nav Options */}
          <Nav className="ms-auto">
            <NavLink
              className={`${styles.SecTextCol} ${styles.PrimHover} ${styles.NavLink} px-3`}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={`${styles.SecTextCol} ${styles.PrimHover} ${styles.NavLink} px-3`}
              href="#link"
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
