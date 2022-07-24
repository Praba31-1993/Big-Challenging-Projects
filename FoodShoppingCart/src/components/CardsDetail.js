import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { DLT,ADD,REMOVE } from '../redux/actions/action'


const CardsDetails = () => {

  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

//   const dispatch = useDispatch();

  
//   const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


//   const compare = ()=>{
//     let comparedata = getdata.filter((e)=>{
//       return e.id == id
//     });
//     setData(comparedata);
//   }

  // add data
  

  const send = (e)=>{
    // console.log(e);
    // dispatch(ADD(e));
  }
  
  const dlt = (id)=>{
    // dispatch(DLT(id));
    history("/");
}

// remove one
const remove = (item)=>{
//   dispatch(REMOVE(item))
}


//   useEffect(()=>{
//     compare();
//   },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img">
              {/* <img src={ele.imgdata} alt="" /> */}
              <img src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGtpdGNoZW58ZW58MHx8MHx8&w=1000&q=80" alt=""/>
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : Thandoori Point</p>
                    <p> <strong>Price</strong>  : ₹500</p>
                    <p> <strong>Dishes</strong>  : Lenin Street Pondicherry</p>
                    <p> <strong>Total</strong>  :₹  550</p>
                    {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div> */}

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.5 ★	</span></p>
                    <p><strong>Order Review :</strong> <span >1175 + order placed from here recently	</span></p>
                    {/* <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p> */}
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails