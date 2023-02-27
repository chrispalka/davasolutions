import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt='' src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg' />
      <p className='legend'>Legend 1</p>
    </div>
  </Carousel>
);
