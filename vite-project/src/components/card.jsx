import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCart } from "../config/redux/reducers/cartslice"

const Card = ({ image, description, id, index, title, product }) => {
  const navigate = useNavigate()

  // SELECTOR
  const select = useSelector(state => state.Cart)

  // DISPATCH
  const dispatch = useDispatch()

  // FUNCTION OF TO ADD IN CART
  const addCartReducer = () => {
    dispatch(addCart({
      title: product
    }))
    Swal.fire({
      title: "Added To Cart Successfully",
      icon: "success"
    })
    console.log(select);
  }


  return (
    <>
      <div className="border border-[#f6f6f6] bg-[#f6f6f6] rounded-lg w-85 uppercase shadow-lg cursor-pointer">
        <div onClick={() => navigate(`/product/${id}`)}>
          <img
            className="rounded-lg bg-black mx-5 text-white"
            src={image}
          // alt={title} 
          />
        </div>
        <div className="p-3">
          <p className="uppercase font-bold underline underline-offset-2 decoration-dotted">{title}</p>
          <p className="truncate text-start">{description}</p>
        </div>
        <div className="text-center flex gap-5">
          <button className="border rounded p-2 bg-black text-white cursor-pointer m-5" onClick={() => navigate(`/product/${id}`)}>VIEW DETAILS</button>
          <button className="border rounded p-2 bg-black text-white cursor-pointer m-5" onClick={addCartReducer} >ADD TO CART</button>
        </div>
      </div>
    </>
  )
}


export default Card