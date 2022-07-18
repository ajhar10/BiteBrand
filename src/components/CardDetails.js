import React from 'react'
import { Table } from 'react-bootstrap'

const CardDetails = () => {
  return (
    <>
    <div className='container mt-3'>
      <h2 className='text-center'>Items Details Page</h2>
      <section className='container mt-3'>
        <div className='iteamsdetails'>
          <div className='items_img'>
          <img src="https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg" alt="" />

          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurant :</strong>  La Milano Pizzeria</p>
                  <p><strong>Price :</strong> ₹70</p>
                  <p><strong>Dishes :</strong>  Pizza, Fast Food, Pasta</p>
                  <p><strong>Total :</strong>  ₹ 70</p>
                </td>
                <td>
                  <p><strong>Rating :</strong> <span style={{background:"green", color:"#fff",padding:"2px",borderRadius:"4px"}}> 4.2 ★</span></p>
                  <p><strong>Order Review :</strong> <span>650 + order placed from here recently</span></p>
                  <p><strong>Remove :</strong> <i className='fas fa-trash' style={{color:"red",fontSize:"1.2rem"}}></i> </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default CardDetails
