import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import "./style.css"

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to='/' className='me-3 font-2 '>BiteBrand</NavLink>
                    <Nav className="me-auto">
                        <NavLink to='/'>Home</NavLink>
                    </Nav>
                    <Badge badgeContent={4} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                    </Badge>

                </Container>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem", padding:10,position:"relative"}}>
        <i className='fas fa-close smallclose' onClick={handleClose} style={{position:'absolute',top:2,right:20,fontSize:23,cursor:'pointer'}}></i>
        <p style={{fontSize:22}}>Your Cart Is empty</p>
        <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem", padding:10}}/>
       </div>
      </Menu>
            </Navbar>
        </div>
    );
};

export default Header;