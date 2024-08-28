import React from 'react';
import img from './image2.jpg';
import './HomeScreen2.css';
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const HomeScreen2 = () => {
  return (
    <div className="HomeScreen2">
      
        <div className='image-container'>
          <img src={img} alt="main-image" className="image-main"/>
        </div>

           <h1 className="tagline-heading">OOH, THAT'S LAZY AF***</h1>

         <div className='image-grid'>

           <div className="flex-cards">
              <img src={img} alt="" className='flex-cards-image' />
            </div>

            <div className="flex-cards">
            <img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>


         </div>



         {/* <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://example.com/message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageOutlinedIcon style={{ color: "black" }} />
          </a>
          <a
            href="https://example.com/camera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraAltOutlinedIcon style={{ color: "black" }} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon style={{ color: "black" }} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/shipping">Shipping & Return</a>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
       
        <h1 className="Footer-desc">THE LAZY LUGGAGE</h1>
      </div>
    </footer> */}
    </div>
  )
}

export default HomeScreen2