import React, {useContext} from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';


const Profile = () => {
    const {navigate} = useContext(ShopContext);
  return (
    <div>
        <div className='text-2xl text-left pt-8 border-t'>
          <Title text1={'YOUR'} text2={'PROFILE'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        Username: natep314
        <br />
        Password: NateP314
        <br />
        <div className='w-full text-end'>
            <button onClick={()=>{
              navigate('/orders');
            }} 
            className='bg-black text-white px-16 py-3 text-sm'
            >
              YOUR ORDERS
            </button>
          </div>
      </div>
    </div>
  )
}

export default Profile