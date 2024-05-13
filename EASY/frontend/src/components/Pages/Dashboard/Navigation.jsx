import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../context/userContext';
import { useNavigate } from 'react-router-dom';

// Styled components
const Navbar = styled.nav`
  background-color: #333;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 20px;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.a`
  color: black;
  text-decoration: none;
  font-size: 2em;
  font-weight: bold;
`;

const NavbarToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const NavbarCollapse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #ffcc00;
  }
`;

const NavButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 21px;

  &:hover {
    background-color: #ffaa00;
  }
`;

export const Navigation = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/')
  }
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Token is found, set the user as logged in
      setIsLoggedIn(true);
    }
  },);
  const handleLogin = () => {
    navigate('/loginsignup')
  }

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
            Easy
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink href="#features" >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink href="#about" >
                About
              </NavLink>
            </li>
           
            
            <li>
              <NavLink href="#testimonials" >
                Testimonials
              </NavLink>
            </li>
           
            <li>
              <NavLink href="#contact" >
                Contact
              </NavLink>
            </li>

            <NavItem>
                {isLoggedIn ? (
                  <NavButton onClick={handleLogout}>
                    Logout
                  </NavButton>
                ) : (
                  <NavButton onClick={handleLogin}>
                    Login/Signup
                  </NavButton>
                )}
              </NavItem>

          </ul>
        </div>
      </div>
    </nav>
  );
};








