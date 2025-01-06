import React from 'react';
import { API } from '../config';
import Layout from './Layout';

const ShowImage = ({ item, url }) => (
  <div className='product-img' style={{height: '250px'}}>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='mb-3'
      style={{ objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    />
  </div>
);

export default ShowImage;
