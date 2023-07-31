// Import necessary modules from React and react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Product component, which receives a prop 'Product'
const Product = ({ Product }) => {
  // console.log(Product)
  return (

    // Use the 'Link' component from react-router-dom to create a link
    // that navigates to the '/product/${Product.id}' route when clicked
    <Link to={`/product/${Product.id}`}>
      {/* Container for the product */}
      <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
        {/* Show 'New' badge if the product is marked as 'isNew' */}
        {Product.attributes.isNew ? (
          <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
            New
          </div>
        ) : (
          // If the product is not new, display an empty element
          ''
        )}

        {/* Container for the product image */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          {/* Product image */}
          <img
            className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
            src={`http://localhost:1337${Product.attributes.image.data.attributes.url}`}
            alt=''
          />
        </div>

        {/* Container for product details */}
        <div className='px-6 pb-8 flex flex-col  ' >
          {/* Display the category of the product in uppercase */}
          <div className='text-sm text-accent capitalize mb-2'>
            {Product.attributes.categories.data[0]?.attributes.title}
          </div>

          {/* Display the truncated product title (up to 35 characters) */}
          <div className='text-[15px] mb-4 lg:mb-9'>
            {Product.attributes.Title?.substring(0, 35)}...
          </div>

          {/* Display the product price (not implemented in the provided code) */}
          <div className='text-lg text-accent     ' >${Product.attributes.Price}</div>
        </div>
      </div>
    </Link>
  );
};

// Export the Product component as the default export of this module
export default Product;
