import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCart, Increament, Decreament } from "../config/redux/reducers/cartslice";
import * as React from "react";
import { Link } from 'react-router-dom';

const FinalCart = () => {
    // SELECTOR
    const data = useSelector(state => state.Cart);

    // DISPATCH
    const dispatch = useDispatch();

    // DELETE
    const Delete = (id) => {
        dispatch(deleteCart({ id }));
    }

    // INCREASING
    const increase = (id) => {
        dispatch(Increament({ id }));
    }
    // DECREASE 
    const decrease = (id) => {
        dispatch(Decreament({ id }));
    }

    // CALCULATING TOTAL PRICE
    const CalculateTotalPrice = () => {
        return data.reduce((total, item) => {
            return total + (item.title.price * item.quantity);
        }, 0).toFixed(2);
    }


    // RENDERING DATA
    return (
        <>
            <h1 className='m-6 underline underline-offset-4 decoration-double text-4xl font-bold text-center'>YOUR CART</h1>
            {data.length === 0 ? (
                <div className="text-center text-gray-500 text-lg font-bold p-2">
                    Your cart is empty, Please add items to your cart
                </div>
            ) : (
                data.map((item) => (
                    <div class="flex items-center gap-5 border-2 border-[#d8dfe0] rounded-lg p-3 w-full" key={item.id}>
                        <div className="p-2 rounded-lg w-1/2">
                            <img
                                src={item.title.thumbnail}
                                alt={item.title.title}
                                className="bg-black text-white"
                            />
                        </div>
                        {/* PRICE AND INCREASE & DECREASE QUANTITY  */}
                        <div className='w-2/3'>
                            {/* Price */}
                            <h3>
                                <span className="text-lg font-bold">${item.title.price} x {item.quantity}</span>
                            </h3>
                            {/* Title */}
                            <h3>
                                <span className="font-bold">{item.title.title}</span>
                            </h3>
                            {/* QUANTITY  */}
                            <div className='flex text-4xl justify-center gap-5'>
                                <button onClick={() => increase(item.id)} className='bg-[#f6f6f6] p-1 rounded cursor-pointer'>+</button>
                                <h4>{item.quantity}</h4>
                                <button onClick={() => decrease(item.id)} className='bg-[#f6f6f6] p-1 rounded cursor-pointer'>-</button>
                            </div> <br />
                            {/* DELETE CART BUTTON  */}
                            <div className='flex justify-center flex-wrap'>
                                <button onClick={() => Delete(item.id)} className="p-3 text-[#ff0000] border border-[#ff0000] font-semibold rounded-lg cursor-pointer hover:bg-[#ff0000] hover:text-white hover:shadow-md">
                                    DELETE <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className='flex justify-between flex-wrap p-5 gap-10'>
                <h2 className='underline underline-offset-4 text-4xl font-bold'>Total Bill: ${CalculateTotalPrice()}</h2>
                <Link to={'checkout'}><button className='text-xl border border-[#81807f] p-2 rounded cursor-pointer'>Check out</button></Link>
            </div>
        </>
    );
}

export default FinalCart;