import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch, products, navigate} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const [suggest, setSuggest] = useState([])
    const location = useLocation();

    {/* Doesn't display search bar except in products page */}

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location])

        {/* Event handler to filter products for suggestions based on live text-input */}

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if(value.length > 0){
            const suggestProducts = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
            setSuggest(suggestProducts);
        }
        else{
            setSuggest([])
        }
    }

    {/* When clicking a suggestion, the search is now the name of the product that was clicked. */}

    const handleSuggestClick = (product) => {
        setSearch(product.name);
        setSuggest([]);
    }

  return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:-1/2'>
            <input value={search} onChange={handleSearchChange} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        {suggest.length > 0 && (
                <div className='mt-1 w-full bg-white border-gray-300 rounded text-left'>
                    {suggest.map((product) => (
                        <div key={product.id} onClick={()=>handleSuggestClick(product)} className='flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full object-cover' src={product.image[0]} alt="" /> {/* object-cover makes image fill container */}
                            {product.name}
                        </div>
                    ))}
                </div>
            )}
        <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar