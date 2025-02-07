// import React from "react";
// import "./Footer2.css";
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-icons">
//           <a
//             href="https://example.com/message"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <MessageOutlinedIcon style={{ color: "black" }} />
//           </a>
//           <a
//             href="https://example.com/camera"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <CameraAltOutlinedIcon style={{ color: "black" }} />
//           </a>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FacebookOutlinedIcon style={{ color: "black" }} />
//           </a>
//         </div>
//         <div className="footer-links">
//           <a href="/contact">Contact</a>
//           <a href="/shipping">Shipping & Return</a>
//           <a href="/terms">Terms of Use</a>
//           <a href="/privacy">Privacy Policy</a>
//           <a href="/faq">FAQ</a>
//         </div>
       
//         <h1 className="Footer-desc">THE LAZY LUGGAGE</h1>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react'
import './Footer2.css'
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";


const Footer2 = () => {
  return (
    <footer className='footer'>
       <div className="footer-links-icon">
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

       <div className="footer-links-options">
         <ul className='footer-links-options-lists'>
           <li>Contact</li>
           <li>Shipping & Return</li>
           <li>Terms of Use</li>
           <li>Privacy Policy</li>
           <li>FAQ</li>
        
         </ul>
       </div>

       <div className="footer-links-description">
        THE LAZY LUGGAGE
       </div>
    </footer>
  )
}

export default Footer2