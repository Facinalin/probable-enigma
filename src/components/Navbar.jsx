import React, { useState } from "react"
import { Link } from 'gatsby'
//  graphql, useStaticQuery

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="logo"><svg width="60" height="60" viewBox="0 0 318 318" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12.5" y="12.5" width="293" height="293" stroke="#161616" strokeWidth="25"/>
<circle className="left-circle" cx="244.4" cy="125.4" r="57.4" fill="#161616"/>
<circle className="right-circle" cx="130.4" cy="125.4" r="57.4" fill="#161616"/>
<rect x="73" y="238" width="229" height="60" fill="#161616"/>
</svg></div>
    <div className="links">
      <button onClick={handleOpen}>
        <svg width="60" height="23" viewBox="0 0 101 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="10" fill="#161616"/>
<rect y="33" width="60" height="10" fill="#161616"/>
</svg>
</button>
<div className={`offcanvas ${isOpen ? 'show' : ''}`}>
<div className="offcanvas-body">
<Link to="/" onClick={handleClose} className="offCanvasLink">首頁</Link>
<Link to="/projects" onClick={handleClose} className="offCanvasLink">我的作品</Link>
<button onClick={handleClose} className="offCanvasCloseBtn">
<svg width="60" height="60" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="61.3848" y="67.0416" width="60" height="8.31683" transform="rotate(-135 61.3848 67.0416)" fill="#161616"/>
<rect x="18.6785" y="61.1049" width="60" height="8.31683" transform="rotate(-45 18.6785 61.1049)" fill="#161616"/>
</svg>
</button>
</div>
</div>
    </div>
</nav>
  )
}

// 