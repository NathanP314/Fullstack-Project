import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

{/* This is the "products" page */}

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false); 
  const [filterProducts, setFilterProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const [genre, setGenre] = useState([])
  const [sortType, setSortType] = useState('relevant')

  {/* For Filters */}

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const toggleGenre = (e) => {
    if(genre.includes(e.target.value)){
      setGenre(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setGenre(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    }

    if(genre.length > 0){
      productsCopy = productsCopy.filter(item=>genre.includes(item.genre))
    }

    setFilterProducts(productsCopy)

  }


  {/* For sort product bt low-high, high-low, relevant, etc. */}

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category, genre, search, showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  {/* Display Product Page */}

  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap=2'>
              <input className='w-3' type="checkbox" value={'Mens'} onChange = {toggleCategory} /> Mens
            </p>
            <p className='flex gap=2'>
              <input className='w-3' type="checkbox" value={'Womens'} onChange = {toggleCategory} /> Womens
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Genre</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap=2'>
              <input className='w-3' type="checkbox" value={'Punk Rock'} onChange = {toggleGenre} /> Punk Rock
            </p>
            <p className='flex gap=2'>
              <input className='w-3' type="checkbox" value={'Emo Rock'} onChange = {toggleGenre} /> Emo Rock
            </p>
          </div>
        </div>

      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'}/>

          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By Price: Low to High</option>
            <option value="high-low">Sort By Price: High to Low</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.length === 0 ? (
                <p className='mt-10 ml-10 text-gray-500 text-sm font-medium'>No results</p>
              ) : (
              filterProducts.map((items,index)=>(
                <ProductItem key={index} id={items.id} name={items.name} image={items.image} price={items.price}/>
              ))
              )
            }
          </div>
      </div>

    </div>
  )
}

export default Collection