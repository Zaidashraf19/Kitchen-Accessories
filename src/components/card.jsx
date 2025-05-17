import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../config/redux/reducers/cartslice";
import { nanoid } from 'nanoid';

const Card = ({ image, description, id, title, product }) => {
  const navigate = useNavigate();

  // SELECTOR
  const select = useSelector(state => state.Cart);

  // DISPATCH
  const dispatch = useDispatch();

  // FUNCTION OF TO ADD IN CART
  const addCartReducer = () => {
    dispatch(addCart({
      title: product,
      id: nanoid()
    }));
    Swal.fire({
      title: "Added To Cart Successfully",
      icon: "success"
    });
  };
  return (
    <>
      <div className="border border-[#f6f6f6] bg-[#f6f6f6] w-75 rounded-lg uppercase shadow-lg cursor-pointer">
        <div onClick={() => navigate(`/product/${id}`)} className="p-2">
          <img
            className="rounded-lg bg-black text-white"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-2">
          <p className="uppercase font-bold underline underline-offset-2 decoration-dotted">{title}</p>
          <p className="truncate text-start">{description}</p>
        </div>
        <div className="text-center flex gap-5">
          <button className="border rounded p-2 bg-black text-white cursor-pointer m-3 font-semibold text-sm" onClick={() => navigate(`/product/${id}`)}>VIEW DETAILS</button>
          <button className="border rounded p-2 bg-black text-white cursor-pointer m-3 font-semibold text-sm" onClick={addCartReducer}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default Card;