import React from 'react';





//  importing Components 

import LatestProducts from '../components/LatestProducts.js';

const Home = () => {

  // const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  // // const { data } = useFetch('/products?populate=*');
  // // console.log("I can see the Data")

  // console.log(data)


  return (

<section>

<LatestProducts/> 

</section>


  );

};

export default Home;
