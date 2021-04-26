import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import './styles/App.css'

export default function HomeCarousel() {
  return (
      <>
      <div className="HomeCarousel">
            <Carousel id='Carousel'>
                <div className='carouselImg'>
                    <img id='1' src={img1} alt='img1' />
                </div>
                <div className='carouselImg'>
                    <img id='2' src={img2} alt='img2' />
                </div>
                <div className='carouselImg'>
                    <img id='3' src={img3} alt='img3' />
                </div>
                <div className='carouselImg'>
                    <img id='4' src={img4} alt='img4' />
                </div>
                <div className='carouselImg'>
                    <img id='5' src={img5} alt='img5' />
                </div>
            </Carousel>
        </div>
    </>
  );
}