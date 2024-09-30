import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartitems',
    initialState: [],
    reducers: {
        // add to cart
        addToCart: (state, actionFromView) => {
            const existingProduct = state.find(item => item.id == actionFromView.payload.id)
            if (existingProduct) {
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                state = [...remainingProduct, existingProduct]
            } else {
                state.push({ ...actionFromView.payload, quantity: 1, totalPrice: actionFromView.payload.price })
            }
        },
        // remove single item
        removeCartItem: (state, actionFromCart) => {
            return state.filter(item => item.id != actionFromCart.payload)
        },
        // increment quantity
        incQuantity: (state, actionFromCart) => {
            const existingProduct = state?.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]
        },
        // decrement quantity
        decQuantity: (state, actionFromCart) => {
            const existingProduct = state?.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]
        },
        // empty cart
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const { addToCart, removeCartItem, incQuantity, decQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer