import React from "react";
import "../App.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = () => {
  return (
    <div className='footer'>
            <div className="container">
                <div>
                    <p>Follow us on &nbsp;&nbsp;
                       <a href="https://www.facebook.com" style={{color:"white",textDecoration:"none"}}> <FacebookOutlinedIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                       <a href="http://www.twitter.com" style={{color:"white",textDecoration:"none"}}> <TwitterIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                       <a href="http://www.instagram.com" style={{color:"white",textDecoration:"none"}}> <InstagramIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </div>
                
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                           
                        </ul>
                    </div>
                </div>
                <p>Designed and developed by <a href="https://www.arawinz.com/" style={{color:"white",textDecoration:"none"}}>Arawinz soft solutions</a></p>
            </div>
        </div>
   
         
    
                    
    
  );
};
