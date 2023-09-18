import React, { useEffect, useState } from 'react';
import { FaPlus,FaMinus } from 'react-icons/fa';



function CartItem({ dish, onAdd ,onRemove ,cat }) {
  const [quantity, setQuantity] = useState(0);
console.log(dish ,"vaa moneee");
  

  useEffect(() => {
    setQuantity(0);
  }, [dish]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    onAdd();
  };

  const handleRemove = () => {
    if (quantity ) {
      setQuantity(quantity - 1);
      onRemove(); // You may want to update the cart count here as well
    }
  };













  return (
    
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div className='flex-[1.5] flex-col gap-5'>
          <h3 className=" text-[16px] sm:text-lg font-semibold">{dish.dish_name}</h3>

          <p className='text-[12px] sm:text-lg  text-gray-600'>{dish.dish_description}</p>

          <p><span>{dish.dish_currency}</span> : <span>{dish.dish_price}</span></p>

          <div className='flex justify-center align-middle gap-3 w-[100px] my-3 py-1  bg-green-500 rounded-full text-white '>

          <button onClick={handleAdd}><FaPlus></FaPlus></button>
          <p>{quantity}</p>
          <button onClick={handleRemove}><FaMinus></FaMinus></button>
          </div>
          { <p className="text-sm text-red-700">Customizations available</p>}
        </div>
        <div className='flex justify-end gap-3 flex-1 mr-2 '>
         <p className="text-[12px] sm:text-sm text-gray-600 font-semibold  ">{dish.dish_calories} calories</p>
  
        </div>
        <div className='flex-1 flex justify-center'>
        <img src={dish.dish_image} alt="" className="w-[100px] h-[100px]" />
      </div>
      </div>
      <hr className='border-b text-gray-500' />

    </div>
  );
}

function Dishes({ category, cartCount, setSelectedCategory }) {
  
  useEffect(() => {
  }, [category, cartCount]);

  if (!category || !category.category_dishes) {
    return <div>No dishes available for this category.</div>;
  }

  return (
    <div className="w-full px-5 sm:px-20">
      <h2 className="text-xl font-semibold mb-4">{category.menu_category} Dishes</h2>
      <ul>
        {category.category_dishes.map((dish) => (
          <li key={dish.id}>
            <CartItem dish={dish} cat={category} onAdd={() => cartCount((prevCount) => prevCount + 1)} onRemove={() => cartCount((prevCount) => prevCount - 1)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dishes;
