import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slice/productSlice'

const Header = ({insideHome}) => {
  const myWishList = useSelector(state=>state.wishtlistReducer)
  const dispatch = useDispatch()
  const myCart = useSelector(state=>state.cartReducer)

  return (
    <nav className='flex w-full bg-yellow-500 fixed top-0 p-5 items-center'>
      <Link className='text-white font-semibold' to={'/'}><i class="fa-solid fa-truck-fast me-1"></i>E-Cart</Link>
      <ul className='flex-1 text-right'>
        { 
        insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))

        } 
        style={{width:'300px'}} className='rounded p-1' type="text" placeholder='Search Products here' /></li>}
        <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600"></i>Wishlist <span className='bg-black rounded p-1 text-white'>{myWishList.length}</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-plus text-green-600"></i>Cart <span className='bg-black rounded p-1 text-white'>{myCart.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header