import React from 'react'
import './Slide.css'
import { Carousel } from 'antd';

function Slide() {

  return (
    <>
    <Carousel  autoplay>
        <div className='Slide1'>
            <div>Hello Am The 1th</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 2th</div>
        </div>
        <div className='Slide1'>
            <div>Hello Am The 3th</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 4th</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 5th</div>
        </div>
    </Carousel>,
    </>
  )
}

export default Slide