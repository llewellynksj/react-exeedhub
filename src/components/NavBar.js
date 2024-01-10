import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown, NavLink, Navbar, Image } from 'react-bootstrap';
import logo from "../assets/exeedhublogo.webp";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Schools
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Primary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Secondary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Sixth Form/College
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Discussion
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Popular Threads
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Topics
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Pre-Loved
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            New Items
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Categories
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

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
  )
}

export default NavBar