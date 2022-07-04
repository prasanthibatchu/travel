import React from 'react'
import '../App.css'
export const Footer=()=>{
    return(
        <div className='footer'>
        <div className='container'>
        <div className="top">
                    <h3>BEACHES.</h3>
                    {/* <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div> */}
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
                            <li>Contact</li>
                        </ul>
                    </div>
           
                <p>Designed and developed by <a href="https://www.arawinz.com/">Arawinz soft solutions</a></p>                    
           </div>
        </div>

    </div>
    )
}