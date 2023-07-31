import React from 'react';


///using fetching hooks
import useFetch from '../hooks/useFetch.js';


//  importing Components 

import ProductSlider from '../components/ProductSlider';

const Home = () => {

  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  // const { data } = useFetch('/products?populate=*');
  // console.log("I can see the Data")

  // console.log(data)


  return <div className='mb-16'>
    <div className='container max-auto'>

      <h2 className='h2 mb-6 text-center xl:text-left'> Latest products </h2>


    </div>

    < ProductSlider data={data} />
    {/* checck on that */}
  </div>;
};

export default Home;
