import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// modules
import { Pagination } from 'swiper';
// importing for images
import cameraPic from '../img/camera.png';

// data section
const slideData = [
  {
    img: cameraPic,
    pretitle: 'Special offer',
    titlePart2: 'on Your',
    titlePart3: 'First Order',
    btnText: 'shop now',
  },
  {
    img: cameraPic,
    pretitle: 'Special offer',
    titlePart2: 'on Your',
    titlePart3: 'First Order',
    btnText: 'shop now',
  },
  {
    img: cameraPic,
    pretitle: 'Special offer',
    titlePart2: 'on Your',
    titlePart3: 'First Order',
    btnText: 'shop now',
  },
];

const MainSlider = () => {
  return (
    <Swiper modules={[Pagination]} loop={true} pagination={{ clickable: true }}
    className='MainSlider mx-auto-max-w-[360px]md:max-w-lg xl:max-w-[1410px]'>
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* Your slide content goes here */}
          <div>
            <img src={slide.img} alt={`Slide ${index}`} />
            <h3>{slide.pretitle}</h3>
            <h2>
              {slide.titlePart2} <br /> {slide.titlePart3}
            </h2>
            <button>{slide.btnText}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
