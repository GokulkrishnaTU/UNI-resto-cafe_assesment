import React, { useState } from 'react';

function Categories({ categories, setSelectedCategory, cartCount }) {
  return (
    <div className="w-full flex flex-col justify-center align-middle py-5 px-5 sm:px-20 overflow-x-scroll">
      {/* <h2 className="text-xl font-semibold mb-4 text-center">Categories</h2> */}
      <ul className=' flex justify-start gap-10  text-gray-600  w-[1400px]'>
        {categories ? (
          categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                setSelectedCategory(category);
                // Reset the cart count to 0 when a category is clicked
                cartCount && cartCount(0);
              }}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded text-lg"
            >
              {category.menu_category}
            </li>
          ))
        ) : (
          <li>Loading categories...</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
