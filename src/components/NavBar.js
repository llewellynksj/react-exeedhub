import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, NavLink, Navbar, Image } from "react-bootstrap";
import logo from "../assets/exeedhublogo.webp";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <NavLink>
            <Image src={logo} height="48vh" />
          </NavLink>
        </Navbar.Brand>
        {/* Burger menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Dropdown Nav Item - Schools */}
            <NavDropdown
              title={
                <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Schools
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Primary
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Secondary
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Sixth Form/College
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Add a Review
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Nav Item - Discussion */}
            <NavDropdown
              title={
                <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Discussion
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Popular Threads
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Browse Topics
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Post New Thread
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Nav Item - Pre-loved */}
            <NavDropdown
              title={
                <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Pre-loved
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  New Items
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  Browse Categories
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink className={`${styles.PrimTextCol} ${styles.SecHover}`}>
                  List an Item
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Account Nav Options */}
          <Nav className="ms-auto">
            <Nav.Link
              className={`${styles.SecTextCol} ${styles.PrimHover}`}
              href="#link"
            >
              Login
            </Nav.Link>
            <Nav.Link
              className={`${styles.SecTextCol} ${styles.PrimHover}`}
              href="#link"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
