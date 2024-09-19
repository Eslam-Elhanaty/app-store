import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

 export let WishContext =createContext()

 export default function WishContextProvider(props){
    

const [dadaWish, setDadaWish] = useState([])

 let headers={
    token:localStorage.getItem('usertoken')
 }



 
function getLoggedWish(){
    
return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    headers:headers
    
} ).then((data)=>(data),    
)

    .catch((err)=>(err))
    
}








function addProductToCWish(productId){

    
        
        
 
    return axios.post( `https://ecommerce.routemisr.com/api/v1/wishlist`, 
        {productId:productId }
        
        ,
        {headers})
        .then((response)=>response)
        .catch((error)=>console.log(error))
        
    
}



// handelProuductWish(productId)
// {
//     addProductToCWish(productId)


// }



function removeWish(productId){
    return axios.delete( `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,  
        {headers})
        .then((response)=>response.data)
        
        .catch((error)=>console.log(error))


}



    return(<>
        <WishContext.Provider value={{getLoggedWish,dadaWish, addProductToCWish, removeWish}}>
            {props.children}
            
            </WishContext.Provider>
    </>
    )

}