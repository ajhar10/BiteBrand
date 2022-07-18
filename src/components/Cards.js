import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import CardData from './CardData';
import "./style.css"

const Cards = () => {
    const [data, setData] = useState(CardData);
    const dispatch = useDispatch();

    const send = item=>{
        dispatch(ADD(item))
        // console.log(item);
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Available Products</h2>
            <div className='row d-flex align-items-center justify-content-center'>
                {
                    data.map((element, key) => {
                        return (
                            <>
                                <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            {element.somedata}
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'>
                                            <Button onClick={()=> send(element)} className='col-lg-12'  style={{backgroundColor:"#075354"}}>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>)
                    }
                    )
                }

            </div>
        </div>
    );
};

export default Cards;