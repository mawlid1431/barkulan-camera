import React from 'react';
//componants

import CategoryNav from '../components/CategoryNav'
import MainSlider from '../components/MainSlider'


// images?

import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';

const Hero = () => {
  return (
    <section className='mb-[30px] pt-36 lg:pt-0'  >

      <div className='container mx-auto '>

        <div className='flex  flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px] '>
          {/* sidebars? */}
          <div>
            <CategoryNav />
          </div  >
          {/* main sliders */}
          <div className='w-full max-w-lg lg:max-w-[734px]mx-auto'   >
            <MainSlider />
          </div>

          {/* promot-images  */}
          <div className='flex flex-col gap-y-[30px] w-full max-lg mx-auto  h-[500px]'>
            {/* promo image1  */}
            <div className='grad flex-1 h-250 rounded-8 overflow-hidden relative p-6 flex'>
              {/* Text will here  */}
              <div className='flex flex-col justify-center max-w-144 h-full'>
                <div className='text-20 uppercase font-medium leading-tight mb-4'>
                  Sve25% All Mirrorless Camera
                </div>
                <a href='#' className=' uppercase text-accent'>Shop Now</a>
              </div>

              {/* imgages  1*/}
              <img className='absolute z-20 top-10 right-10' src={PromoImg1} alt='' />
            </div>





          </div>


          {/* Part will start here  */}


          <div className='flex flex-col gap-y-[30px] w-full max-lg mx-auto  h-[500px]'>
            {/* promo image1  */}
            <div className='grad flex-1 h-250 rounded-8 overflow-hidden relative p-6 flex'>
              {/* Text will here  */}
              <div className='flex flex-col justify-center max-w-144 h-full'>
                <div className='text-20 uppercase font-medium leading-tight mb-4'>
                  Sve35% All Dslr Camera
                </div>
                <a href='#' className=' uppercase text-accent'>Shop Now</a>
              </div>

              {/* imgages 2  */}
              <img className='absolute z-20 top-15 right-10' src={PromoImg2} alt='' />
            </div>





          </div>

        </div>




      </div>

    </section>)
};

export default Hero;
