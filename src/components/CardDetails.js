import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DLT } from '../redux/actions/action'


const CardDetails = () => {
  const [data, setData] = useState([])

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector(state => state.cartreducer.carts);

  // console.log(getdata);
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata)
  }

  const removeItem = id => {
    dispatch(DLT(id))
    navigate("/")
  }

  //It is used for selecting an item for details page on cart
  useEffect(() => {
    compare();
  }, [id])
  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Items Details Page</h2>
        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((item) => {
                return (
                  <>

                    <div className='items_img'>
                      <img src={item.imgdata} alt="" />

                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant :</strong> {item.rname}</p>
                            <p><strong>Price :</strong> ₹{item.price}</p>
                            <p><strong>Dishes :</strong>  {item.address}</p>
                            <p><strong>Total :</strong>  ₹ 70</p>
                            {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }}><i class="fa-solid fa-circle-minus"></i></span>
                              <span style={{ fontSize: 24 }}>{item.qnty}</span>
                              <span style={{ fontSize: 24 }}><i class="fa-solid fa-circle-plus"></i></span>
                            </div> */}
                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px", borderRadius: "4px" }}> {item.rating} ★</span></p>
                            <p><strong>Order Review :</strong> <span>{item.somedata}</span></p>
                            <p><strong>Remove :</strong> <i className='fas fa-trash' style={{ color: "red", fontSize: "1.2rem" }} onClick={() => removeItem(item.id)}></i> </p>
                          </td>
                        </tr>
                      </Table>
                    </div>

                  </>
                )
              }
              )
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardDetails
