import React, { useContext, useEffect, useState } from 'react';
import { WishContext } from '../../Context/WishContext/WishContext';
import { CartContext } from '../../Context/CartContext/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Wish() {
  const [wishItem, setWshItem] = useState([]);
  const { addProductToCart } = useContext(CartContext);
  const { getLoggedWish, removeWish } = useContext(WishContext);

  // جلب قائمة الأمنيات
  async function getItem() {
    try {
      let x = await getLoggedWish();
      const wishData = Object.values(x.data.data); // تحويل الكائن إلى مصفوفة
      setWshItem(wishData);
    } catch (error) {
      console.error('Error fetching wish items:', error);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  // حذف عنصر
  async function deleteItem(productId) {
    try {
      // محاولة حذف المنتج
      await removeWish(productId);

      // إعادة جلب قائمة الأمنيات بعد الحذف
      getItem(); // استدعاء getItem لتحديث البيانات من الخادم
    } catch (error) {
      console.error('Error removing item from wish list:', error);
    }
  }


  function handleAddToCart(productId) {
    addProductToCart(productId);

    toast.success((' Product added successfully to your cart ❤️'),
      {
        duration: 3000,
        position: 'top-right',

        style: {
          backgroundColor: 'green', padding: '16px', color: 'white', fontSize: "20px", border: '1px solid white',
          padding: '16px',

        }


      })
  }



  return (
    <div className='mt-20'>
      <Helmet>
        <title>
          wish-List
           </title>
      </Helmet>

      <div className='container py-7 bg-gray-100 rounded-md'>
        <h1 className='ms-4 mb-2 px-7 text-3xl font-semibold'>My Wish List</h1>
        <div className='row ms-6'>
          {wishItem.length > 0 ? (
            wishItem.map((prdt) => (
              <div key={prdt.id} className='flex justify-between w-full items-center border-b-2'>
                <div className='flex items-center'>
                  <div className='w-44 m-5'>
                    <img className='w-full' src={prdt.imageCover} alt="" />
                  </div>
                  <div>
                    <h6 className='font-bold my-2'>
                      {prdt.category && prdt.category.name ? prdt.category.name : 'Unknown Category'}
                    </h6>
                    <p>{prdt.price} EGp</p>
                    <button className='mt-4' onClick={() => deleteItem(prdt.id)}>
                      Remove
                      <i className="fa fa-trash ms-2 text-red-600"></i>
                    </button>
                  </div>
                </div>
                <div className='me-7'>
                  <button type='submit' onClick={() => handleAddToCart(prdt.id)} className='border text-white p-3 rounded-lg bg-rose-500'>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items in your wish list.</p>
          )}
        </div>
      </div>
    </div>
  );
}
