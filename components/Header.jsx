
import {Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { deleteCookie } from '../utils/common';
import { useEffect, useState } from 'react';
import { getMenu } from '../utils/menu';

function Header() {
  const navigate = useNavigate()

  const {userInfo, setUserInfo} = useUser()
   const [menu, setMenu]=useState([])

   //function to fetch user data and set state
   useEffect(()=>{
        if(userInfo) setMenu(getMenu(userInfo.role)) //update menu when user info changes
        else setMenu([])


   },[userInfo])

   const logout=()=>{
        deleteCookie('_USER_AUTH_');
        setUserInfo(null) // update userinfo state
        navigate('/')
        setMenu([])
   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Rawat coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

           {menu.map((item, index)=>{
            return <NavLink key={index} className="ms-2 nav-link" to={item.path} >{item.displayName}</NavLink>
           })}
            <NavLink className="ms-2  nav-link" to='admin'>AdminPanel</NavLink>
            <NavLink className="ms-2  nav-link" to='users'>Users</NavLink>
            <NavLink className="ms-2  nav-link" to='user-info'>User Info</NavLink>
            
              {userInfo ? 
              <Button variant='danger' onClick={logout} > Logout</Button>
              :
              <Button variant='primary'><NavLink to="/" className='text-white'>Login</NavLink></Button>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;