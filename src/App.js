import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Dishes from './Dishes';
// import Cart from './Cart';
import './index.css';
import { BsFillCartFill } from 'react-icons/bs';


function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
      .then((response) => response.json())
      .then((data) => {
        const restaurantData = data[0];
        const categories = restaurantData.table_menu_list;
        setCategories(categories);
        const firstCategory = categories[0];
        setSelectedCategory(firstCategory);
      });
  }, []);

  // Reset cartItemCount when selectedCategory changes
  useEffect(() => {
    setCartItemCount(0);
  }, [selectedCategory]);

  return (

    <div className='flex- flex-col w-full'>

    <div className=" px-5 sm:px-20 p-4 flex  w-full justify-between ">
             <h1 className="text-3xl font-bold  flex-1       text-gray-500
">UNI Resto Cafe</h1>

      
      <div className='flex justify-end  relative'>

      <h1 className='text-right text-3xl flex justify-center gap-4 align-middle'> <span className='text-[18px] font-bold  flex-1       text-gray-500'>My Orders</span> <BsFillCartFill ></BsFillCartFill></h1>
      <span className='absolute right-[-15px] top-[-10px] bg-red-600 w-6 h- text-white flex justify-center rounded-full'>{cartItemCount}</span>
      </div>

      <div className="flex flex-col justify-center space-x-4">
      </div>
      </div>

        <Categories
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          cartCount={setCartItemCount}
        />
        <Dishes category={selectedCategory} cartCount={setCartItemCount} />
      </div>
  );
}

export default App;
