import React from 'react';

//usefecht hooks
import useFetch from '../hooks/useFetch';
// links will be here 
import { Link } from 'react-router-dom';


const CategoryNav = () => {
  const { data } = useFetch('/categories');
  // console.log(data)

  return <aside className='hidden xl:flex' >


    <div className='bg-primary flex flex-col  w-[286px] h-[500px] rounded-[8px] overflow-hidden' >
      <div className='bg-accent py-4  text-primary uppercase  font-semibold flex-item-center justify-center'  >Browse Categories</div>

      <div className='flex flex-col gap-y-6 p-6'>
        {data?.map(Category => {
          // console.log(Category);

          return <Link
           to={`/Products/${Category.id}`} className='cursor-pointer uppercase' key={Category.id}>

        {Category.attributes.title}


          </Link>


        })}






      </div>



    </div>



  </aside>;
};

export default CategoryNav;
