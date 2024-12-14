import React from 'react';
import Menu from './Menu';
import '../styles.css';
// import Marquee from "react-fast-marquee";


const Layout = ({ className, children }) => (
  <div>
    <Menu />
    {/* Replace title and description with an image */}
    <div className='d-flex jumbotron mt-5 text-center'>
      {/* <div className='jumbotron mt-5 text-center'> */}
      <marquee style={{ height:'115px' }}>
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
        />
        <img
          src="1-removebg-preview.png" // <-- Replace with the correct path to your image
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
        />
      </marquee>

    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
