import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        Cart: [],
        totalprice: 0,
    },
    reducers: {
        TotalPrice: (state) => {
            let total = 0;
            state.Cart.forEach((item) => {
                total += item.title.price * item.quantity;
            });
            state.totalprice = total;
        },
        addCart: (state, action) => {
            const existingItem = state.Cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if item already exists
            } else {
                state.Cart.push({
                    title: action.payload.title,
                    quantity: 1,
                    id: nanoid(), // Generate a unique ID for each new product
                });
            }
            // Update total price after adding
            state.totalprice = state.Cart.reduce((total, item) => total + (item.title.price * item.quantity), 0);
        },
        deleteCart: (state, action) => {
            const index = state.Cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.Cart.splice(index, 1);
            }
            // Update total price after deletion
            state.totalprice = state.Cart.reduce((total, item) => total + (item.title.price * item.quantity), 0);
        },
        Increament: (state, action) => {
            const item = state.Cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            // Update total price after increment
            state.totalprice = state.Cart.reduce((total, item) => total + (item.title.price * item.quantity), 0);
        },
        Decreament: (state, action) => {
            const item = state.Cart.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            // Update total price after decrement
            state.totalprice = state.Cart.reduce((total, item) => total + (item.title.price * item.quantity), 0);
        }
    }
});

export const { addCart, deleteCart, Increament, Decreament, TotalPrice } = cartSlice.actions;
export default cartSlice.reducer;