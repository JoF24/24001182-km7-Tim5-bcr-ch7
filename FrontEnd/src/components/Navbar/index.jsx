import { Link, useNavigate } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../service/auth";


const NavigationBar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProfile = async () => {
      const result = await profile();
      if (result.success) {
        dispatch(setUser(result.data));
        return;
      }
      dispatch(setUser(null));
      dispatch(setToken(null));
      navigate({ to: "/login" });
    };

    if (token) getProfile();
  }, [dispatch, navigate, token]);

  const logout = (event) => {
    event.preventDefault();
    dispatch(setUser(null));
    dispatch(setToken(null));
    navigate({ to: "/login" });
  };

  return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <Nav.Link onClick={toggleSidebar}>☰</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
            {user ? (
                <NavDropdown
                title={
                    <span>
                    <Image
                        src={user?.profile_picture}
                        fluid
                        style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        overflow: "hidden",
                        borderRadius: "50%",
                        marginRight: "5px",
                        }}
                    />
                    {user?.name}
                    </span>
                }
                id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/profile">
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                    Logout
                </NavDropdown.Item>
                </NavDropdown>
            ) : (
                <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </>
                )}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavigationBar;
