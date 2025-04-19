import { createSlice , nanoid} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        Cart: [{
            title: "No item found",
            id: 1,
            quantity: 1
        }]
    },
    reducers: {
        addCart:(state , action) => {
            state.Cart.push({
                title: action.payload.title,
                id: nanoid(),
            })
        },
        deleteCart: (state , action) => {
            state.Cart.splice(action.payload.index , 1);
        },
        Increament: (state, action) => {
            const item = state.Cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        Decreament: (state, action) => {
            const item = state.Cart.find(item => item.id === action.payload.id);
            if (item.quantity <= 1){
                alert ("WHAT ARE YOU WILLING ?")
            }
                else {
                item.quantity -= 1;
            }
        }
    }
})
export const {addCart , deleteCart , Increament , Decreament } = cartSlice.actions
export default cartSlice.reducer