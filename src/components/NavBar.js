import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, Navbar, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/exeedhublogo.webp";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedOutNav = (
    <>
      <Nav className="me-auto">
        {/* Dropdown Nav Item - Schools */}
        <NavDropdown
          title={
            <Link className="Link" to="/schools">
              Schools
            </Link>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            <NavLink className="Link">Primary</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink className="Link">Secondary</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink className="Link">Sixth Form/College</NavLink>
          </NavDropdown.Item>
        </NavDropdown>

        {/* Dropdown Nav Item - Discussion */}
        <NavDropdown
          title={<Link className="Link">Discussion</Link>}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            <NavLink className="Link" to="/discussion/popular">
              Popular Threads
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink className="Link">Browse Topics</NavLink>
          </NavDropdown.Item>
        </NavDropdown>

        {/* Dropdown Nav Item - Pre-loved */}
        <NavDropdown
          title={<Link className="Link">Pre-loved</Link>}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            <NavLink className="Link">New Items</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink className="Link">Browse Categories</NavLink>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      {/* Account Nav Options */}
      <Nav className="ms-auto">
        <NavLink
          className={`${styles.SecTextCol} ${styles.NavLink} px-3`}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={`${styles.SecTextCol} ${styles.NavLink} px-3`}
          to="/register"
        >
          Register
        </NavLink>
      </Nav>
    </>
  );

  const loggedInNav = (
    <>
      <Nav className="me-auto">
        {/* Dropdown Nav Item - Schools */}
        <NavDropdown
          title={
            <Link
              className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
            >
              Schools
            </Link>
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
            <Link
              className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
            >
              Discussion
            </Link>
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
            <Link
              className={`${styles.PrimTextCol} ${styles.SecHover} ${styles.NavLink}`}
            >
              Pre-loved
            </Link>
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
          to="/"
        >
          {currentUser?.username}
        </NavLink>
        <NavLink
          className={`${styles.SecTextCol} ${styles.PrimHover} ${styles.NavLink} px-3`}
          to="/"
          onClick={handleSignOut}
        >
          Logout
        </NavLink>
      </Nav>
    </>
  );

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
          {currentUser ? loggedInNav : loggedOutNav}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
