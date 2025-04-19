import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCart, Increament, Decreament } from "../config/redux/reducers/cartslice"

const FinalCart = () => {

    
    const dispatch = useDispatch();
    // DELETE
    const Delete = (id) => {
        dispatch(deleteCart({id}))
        console.log("DELETE");
    }

    // INCREASING
    const increase = (id) => {
        // dispatch(Increament({id}))
        dispatch(Increament({ id }))
        console.log("+1");
    }

    // DECREASE 
    const decrease = (id) => {
        dispatch(Decreament({id}))
    }

    // RENDERING DATA
    const data = useSelector(state => state.Cart);
    console.log(data);
    return (
        <>
            <h1 className='m-6 underline underline-offset-4 decoration-double text-4xl font-bold text-center'>YOUR CART</h1>
            {data.map((item, index) => (
                <div className="flex flex-col items-center my-15 gap-5">
                    <div className="border border-[#f6f6f6] bg-[#f6f6f6] rounded-lg w-100 shadow-lg">
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className="bg-black mx-10 text-white"
                        />
                    </div>
                    {/* PRICE AND INCREATE & DECREASE QUANTITY  */}
                    <div className="border-2 w-100 border-[#d8dfe0] rounded-lg p-3">
                        {/* Price */}
                        <h3>
                            <span className="font-extrabold text-xl">Price: </span>
                            <span className="text-lg font-bold">${data.price} </span>
                            <span className="line-through text-gray-500 text-sm">${(data.price / (100 - item.discountPercentage) * 100).toFixed(2)} </span>
                            <span className="text-sm"> {data.discountPercentage}% Off</span>
                        </h3>
                        {/* Title */}
                        <h3>
                            <span className="font-extrabold text-xl">Title: </span>
                            <span className="font-bold">{data.title}</span>
                        </h3>
                        {/* QUANTITY  */}
                        <div className='flex text-4xl justify-center gap-5'>
                            <button onClick={() => increase(item.id)} className='bg-[#f6f6f6] p-1 rounded cursor-pointer'>+</button>
                            <h4>{item.quantity}</h4>
                            <button onClick={() => decrease(item.id)} className='bg-[#f6f6f6] p-1 rounded cursor-pointer'>-</button>
                        </div> <br />
                        {/* DELETE CART BUTTON  */}
                        <div className='flex justify-center'>
                            <button onClick={() => Delete(item.id)} className="w-50 py-3 text-[#ff0000] border border-[#ff0000] font-semibold rounded-lg cursor-pointer hover:bg-[#ff0000] hover:text-white hover:shadow-md">
                                DELETE <DeleteIcon />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FinalCart