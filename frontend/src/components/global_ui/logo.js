import React from 'react';
import './logo.css'
/**
 * 
 * @returns ReliefRider's Logo
 */
const Logo = () => {
    return ( 
        <div className="logo-container" >
        <img src={window.location.origin+`/assets/logo.png`}  alt="logo" />
        </div>
     );
}
 
export default Logo;