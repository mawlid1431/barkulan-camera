import React from 'react';

//importing componanates
import ProductSlider from '../components/ProductSlider';



///using fetching hooks
import useFetch from '../hooks/useFetch.js';



const LatestProducts = () => {

  // getting New product 
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  // const { data } = useFetch('/products?populate=*');
  // console.log("I can see the Data")


  return (

    <div className='mb-16'>
      <div className='container max-auto'>

        <h2 className='h2 mb-6 text-center xl:text-left'> Latest products </h2>


      </div>

      < ProductSlider data={data} />
      {/* checck on that */}
    </div>



  );
};

export default LatestProducts;
