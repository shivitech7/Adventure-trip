import React, { useState } from 'react'
import './Footer.css';
import HighQuality from '../../Images/HighQuality.png';
import QuickService from '../../Images/QuickService.png';
import RoyalTaste from '../../Images/RoyalTaste.png';
import ArrowBlack from '../../Images/BlackArrow.png';
import Object from '../../Images/Object.png';
import Twitter from '../../Images/twitter.png';
import Facebook from '../../Images/facebook.png';
import Instagram from '../../Images/instagram.png';

const Footer = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="footer-wrapper">
            {/* footer bottom */}
            <div className="footer-bottom-container">
                
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    padding:'15px 0px 15px 0px'
                    // border:'1px solid white'
                }} >
                    <h1 style={{
                        fontFamily: 'Libre Baskerville, serif',
                        fontWeight: '400',
                        fontSize: '15px',
                        // letterSpacing: '-2px',
                        textAlign:'center',
                        width:'100%',
                        color:'white'
                    }} className="footer-name">
                    ©2022 Adventurous trip</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer