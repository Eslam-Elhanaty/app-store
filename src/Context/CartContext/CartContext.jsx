// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext()

// // let headers = { token: localStorage.getItem('userToken'),};
// export default function CartContextProvider(props) {
// const [ numOfCartItems, setNumOfCartItems] = useState(0)

//     let headers={
//         token:localStorage.getItem('usertoken')
//     }

//     function onlinePayment( cartId ,shippingAddress, url){
       
//         return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/66d1e319528dfee040738dca',
        
//             {shippingAddress}
        
//         ,{headers,
//             params:{url:'http://localhost:5173'},
//         }
//     )
//             .then((data)=> (data) )
//             .catch((err)=>console.log(err))

//     }

//     function getLoggedUserCart(){
 
//         return axios.get( 'https://ecommerce.routemisr.com/api/v1/cart',{
//             headers})
//             .then((response)=>response)
//             .catch((error)=>console.log(error))
//     }


//    async function getNumberOfCart(){

//       let data =await  getLoggedUserCart()
//       setNumOfCartItems(data.data.numOfCartItems)
//  }

// useEffect(() => {
//     getNumberOfCart()

// }, [])


//     function deleteCart(productId){
 
//         return axios.delete( `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
//             headers})
//             .then((response)=>response)
//             .catch((error)=>console.log(error))
//     }


//     function addProductToCart(productId){
 
//         return axios.post( 'https://ecommerce.routemisr.com/api/v1/cart', 
//             {productId:productId
//             }
            
//             ,
//             {headers})
//             .then((response)=>response)
//             .catch((error)=>console.log(error))
            
//     }


//     function updateCartCount(productId, count){
 
//         return axios.put( `https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
//             {count:count
//             }
            
//             ,
//             {headers})
//             .then((response)=>response)
//             .catch((error)=>console.log(error))
//     }


//     return <CartContext.Provider value={{getLoggedUserCart , addProductToCart , updateCartCount ,deleteCart ,numOfCartItems,setNumOfCartItems ,onlinePayment}}>

//         {props.children}
//     </CartContext.Provider>
// }

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
    const [numOfCartItems, setNumOfCartItems] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const headers = {
        token: localStorage.getItem('usertoken'),
    };

    async function fetchWithErrorHandling(fetchFunction) {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchFunction();
            return response;
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    function getLoggedUserCart() {
        if (!headers.token) {
            return Promise.resolve(null);
        }
        return fetchWithErrorHandling(() => axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers }));
    }

    async function getNumberOfCart() {
        const data = await getLoggedUserCart();
        if (data) {
            setNumOfCartItems(data.data.numOfCartItems);
        }
    }

    useEffect(() => {
        getNumberOfCart();
    }, []);

    function deleteCart(productId) {
        return fetchWithErrorHandling(() => axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers }));
    }

    function addProductToCart(productId) {
        return fetchWithErrorHandling(() => axios.post('https://ecommerce.routemisr.com/api/v1/cart', 
            { productId }, { headers }));
    }

    function updateCartCount(productId, count) {
        return fetchWithErrorHandling(() => axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
            { count }, { headers }));
    }

    return (
        <CartContext.Provider value={{ getLoggedUserCart, addProductToCart, updateCartCount, deleteCart, numOfCartItems, setNumOfCartItems, loading, error }}>
            {props.children}
        </CartContext.Provider>
    );
}
