import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import "./style.css"
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DLT } from '../redux/actions/action';
// import { cartreducer } from '../redux/reducers/reducer';

const Header = () => {
    const [price, setPrice] = useState(0);
    const getdata = useSelector(state => state.cartreducer.carts);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeItem=(id)=>{
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price + price
        })
        setPrice(price);
    }

    useEffect(()=>{
        total();
    },[total])
    return (
        <div>
            <Navbar bg="light" variant="light" style={{ height: "60px" }}>
                <Container>
                    <Nav.Link as={Link} to='/' style={{fontSize:22,color:"#4df7f7c1"}} className='me-3 font-4 '>BiteBrand</Nav.Link>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i className="fa-solid fa-cart-shopping text-dark" style={{ fontSize: 25, cursor: 'pointer' }}></i>
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
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem" }}>
                                <Table>
                                    <thead>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map(e => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <Nav.Link as={Link} to={`/cart/${e.id}`}><img src={e.imgdata} alt="" style={{ width: "5rem" }} /></Nav.Link>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price: ₹{e.price}</p>
                                                                <p>Quantity: {e.qnty}</p>
                                                                <p style={{ fontSize: 20, color: "red", cursor: "pointer" }} onClick={()=>removeItem(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>
                                                            <td style={{ fontSize: 20, color: "red", cursor: "pointer" }} onClick={()=>removeItem(e.id)}>

                                                                <i className='fas fa-trash largetrash'></i>

                                                            </td>
                                                        </tr>


                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total: ₹{price}</p>
                                    </tbody>
                                </Table>
                            </div>

                            : <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }}></i>
                                <p style={{ fontSize: 22 }}>Your Cart Is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }
                </Menu>
            </Navbar>
        </div>
    );
};

export default Header;