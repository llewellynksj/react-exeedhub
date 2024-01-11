import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const LoggedInNav = () => {
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

  return (
    <>
      <Nav className="me-auto">
        {/* Dropdown Nav Item - Schools */}
        <NavDropdown
          title={
            <LinkContainer to="/schools">
              <span className="Link">Schools</span>
            </LinkContainer>
          }
          id="basic-nav-dropdown"
        >
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Primary</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Secondary</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Sixth Form/College</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Add a Review</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        {/* Dropdown Nav Item - Discussion */}
        <NavDropdown
          title={
            <LinkContainer to="/">
              <span className="Link">Discussion</span>
            </LinkContainer>
          }
          id="basic-nav-dropdown"
        >
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link" to="/">
                Popular Threads
              </Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Browse Topics</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Post New Thread</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        {/* Dropdown Nav Item - Pre-loved */}
        <NavDropdown
          title={
            <LinkContainer to="/">
              <span className="Link">Pre-loved</span>
            </LinkContainer>
          }
          id="basic-nav-dropdown"
        >
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">New Items</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">Browse Categories</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/">
            <NavDropdown.Item>
              <Nav.Link className="Link">List an Item</Nav.Link>
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>

      {/* Account Nav Options */}
      <Nav className="ms-auto">
        <LinkContainer to="/">
          <Nav.Link
            className={`${styles.SecTextCol} ${styles.PrimHover} ${styles.NavLink} px-3`}
            to="/"
          >
            {currentUser?.username}
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link
            className={`${styles.SecTextCol} ${styles.PrimHover} ${styles.NavLink} px-3`}
            onClick={handleSignOut}
          >
            Logout
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
};

export default LoggedInNav;
