import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

const Wishlist = () => {
  const myCart = useSelector(state=>state.cartReducer)
  const myWishList = useSelector(state=>state.wishtlistReducer)
  const dispatch = useDispatch()
  const handleAddToCart = (product)=>{
    const existingProduct = myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product quatity is incrementing!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: '80px' }} className='container mx-auto px-4'>
      {
        myWishList.length>0?
        <>
        <h1 className="text-red-500 text-3xl font-bold mb-5">Your Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            myWishList?.map(product=>(
              <div key={product?.id} className="rounded border p-5 shadow">
            <img style={{width:'100%',height:'300px'}} src={product?.thumbnail} alt="" />
            <div className="text-center">
              <h3 className="text-xl font-bold">{product?.title}</h3>

              <div className="flex justify-evenly mt-3">
                <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                <button onClick={()=>handleAddToCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-600"></i></button>
              </div>

            </div>
          </div>
            ))
          }
        </div>
     </>
     :
     <div style={{height:'100vh'}} className='flex flex-col items-center justify-center w-full'>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" />
      {/* <h1 className='text-3xl font-bold text-blue-600'>Your Wishlist is empty</h1> */}
     </div>
      }
      </div>
    </>
  )
}

export default Wishlist