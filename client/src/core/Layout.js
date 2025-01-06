import React from 'react';
import Menu from './Menu';

import '../styles.css';


const Layout = ({ className, children }) => (
  <div>
    <Menu />
    <div className='d-flex jumbotron mt-5 text-center'>
      <marquee style={{ height:'115px' }}>
        <img
          src="/download.png" 
          alt='Hoomies Banner'
          style={{height:'100px' }}
        />
        <img
          src="/download (2).png" 
          alt='Hoomies Banner'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="/download (4).png" 
          alt='Hoomies Banner'
          style={{height:'100px'}}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="/download (4).png" 
          alt='Hoomies Banner'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="/download (1).png" 
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
          // style={{ maxWidth: '70%', height: '200%' }}
        />
        <img
          src="/1-removebg-preview.png" 
          alt='Hoomies Banner'
          style={{height:'100px' }}
        />
        <img
          src="/30off-removebg-preview.png" 
          alt='Hoomies Banner'
          // className='moving-image'
          style={{height:'100px' }}
        />
        <img
          src="/1-removebg-preview.png" 
          alt='Hoomies Banner'
          style={{height:'100px' }}
        />
      </marquee>

    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;

