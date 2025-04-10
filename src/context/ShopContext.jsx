import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext({});

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const[cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    const [orders,setOrders] = useState([]);

    const addToCart = async (itemId,size) => {
        if(!size){
            toast.error('Please select a product size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product.id === Number(items));
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    } 
                }
                catch(error){

                }
            }
        }
        return totalAmount;
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const placeOrder = () => {
        const orders = [];
        for(const productId in cartItems){
            for(const size in cartItems[productId]){
              if(cartItems[productId][size] > 0){
                const product = products.find(p=>p.id === Number(productId))
                if (product){
                    orders.push({
                        id: productId,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        size,
                        quantity: cartItems[productId][size]
                    });
                }
               
              }
            }
          }
          setOrders(prev => [...prev,...orders]);
          setCartItems({});
        if(orders.length > 0){
            toast.success('Order Confirmed');
        }
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems]);

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,
        updateQuantity, getCartAmount,
        navigate, placeOrder, orders
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider