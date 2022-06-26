import React from 'react'
import "./Home.css"
import { Slider } from '../../components/slider/Slider'
import {headerItems,products} from "../../utils/ProductsData"
import Banner1 from "../../assets/BannerImages/Banner1.jpg"
import Banner2 from "../../assets/BannerImages/Banner2.jpg"
import Banner3 from "../../assets/BannerImages/Banner3.jpg"
import Banner4 from "../../assets/BannerImages/Banner4.jpg"
import Banner5 from "../../assets/BannerImages/Banner5.jpg"
import Banner6 from "../../assets/BannerImages/Banner6.jpg"
const Home = () => {
  const bannerImages = [Banner1,Banner2,Banner3,Banner4,Banner5,Banner6,]
  return (
    <div>
      <div className='item-container'>
        {headerItems && headerItems.map((item, index)=><p>{item}</p>)}
      </div>
      <div className="home">
      <div className="home-container">
        <Slider images={bannerImages}/>
        <div className="home-row">{/*products*/}</div>
        <div style={{marginTop:"40px"}}>{/*Back To Top*/}</div>


      </div>

      </div>
    </div>
  )
}
export default Home;
