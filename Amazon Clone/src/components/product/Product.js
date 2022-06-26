import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, Grade } from '@material-ui/icons'
// import { products } from '../../utils/ProductsData'

const Product = (props) => {
    console.log("product", props.props.id)
  return (
    <div className='product'>
            <div className='info'>
                <Link to={`/products/{id`} className="title">
                    <p>{props.props.title}</p>
                </Link>
                <p className='price'>
                    <strong>$</strong>
                    <strong>{props.props.price}</strong>

                </p>
                <div className="rating">
                    {Array(props.props.rating).fill().map((_,index)=><p key={index}><Grade/></p>)}
                </div>
                    <img className="product_img" src={props.props.image} alt="" />
                    <button className='product_button'>
                        <i>
                            <ShoppingCartOutlined/>
                        </i>   
                        Add to Basket
                    </button>
            </div>
    </div>
  )
}
export default Product