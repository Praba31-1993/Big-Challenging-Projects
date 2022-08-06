import React, {useState, useRef} from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
const PostShare = () => {
const [image, setImage] = useState(null)
const imageRef = useRef()
console.log("imagesRef", imageRef)

const ImageChangeURL=(e)=>{
    const img = e.target.files[0] 
    console.log("img", img);
    if(e.target.files && e.target.files[0]){
        setImage({
            image:URL.createObjectURL(img)

        })
    }


}
console.log("imagesName", image)

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
        <div className="option" style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click()}>
          <UilScenery /> Photo
        </div>
        <div className="option" style={{color:"var(--video)"}}>
          <UilPlayCircle />
          Video
        </div>
        <div className="option" style={{color:"var(--location)"}}>
          <UilLocationPoint />
          Location
        </div>
        <div className="option" style={{color:"var(--shedule)"}}>
          <UilSchedule />
          Schedule
        </div>
        <button className="button ps-button">Share</button>
        <div>
        <input type="file" name="myImage" ref={imageRef} onChange={ImageChangeURL}/>
      </div>

      </div>
    {image && (
        <div className="previewImage">
            <UilTimes/>
            <img src={image.image} alt=""/>
        </div>
    )} 
      </div>
    </div>
  );
};

export default PostShare;
