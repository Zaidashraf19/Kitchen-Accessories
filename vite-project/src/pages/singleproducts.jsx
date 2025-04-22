import useFetch from "../hooks/usefetch"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../config/redux/reducers/cartslice"

const SingleProducts = () => {

    // DISPATCH
      const dispatch = useDispatch()
    
    //   SELECT
      const select = useSelector(state => state.Cart)

    // FUNCTION OF TO ADD IN CART
      const addCartReducer = () => {
        dispatch(addCart({
          title: data
        }))
        Swal.fire({
            title: "Added To Cart Successfully",
            icon: "success"
          })
        console.log(select);
      }

    const params = useParams()
    const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)
    if (loading) {
        return <h1 className="text-3xl m-2 font-bold text-blue-900 animate__animated animate__flash animate__infinite">LOADING...</h1>
    }
    if (error) {
        return <h1 className="text-red-800 text-4xl text-center font-bold underline underline-offset-4 decoration-black decoration-dashed animate-pulse">ERROR OCCURRED...</h1>
    }
    return (
        <>
            <div className="flex flex-col items-center my-15 gap-5">
                {/* IMAGE */}
                <div className="border border-[#f6f6f6] bg-[#f6f6f6] rounded-lg shadow-lg p-3">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="bg-black text-white"
                    />
                </div>
                {/* PRICE AND TITLE */}
                <div className="border-2 w-70 border-[#d8dfe0] rounded-lg p-3">
                    {/* Price */}
                    <h3>
                        <span className="font-extrabold text-xl">Price: </span>
                        <span className="text-lg font-bold">${data.price} </span>
                        <span className="line-through text-gray-500 text-sm">${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)} </span>
                        <span className="text-sm"> {data.discountPercentage}% Off</span>
                    </h3>
                    {/* Title */}
                    <h3>
                        <span className="font-extrabold text-xl">Title: </span>
                        <span className="font-bold">{data.title}</span>
                    </h3>
                    {/* Brand */}
                    <h3>
                        <span className="font-extrabold text-xl">Brand: </span>
                        <span className="font-bold">{data.brand}</span>
                    </h3>
                    {/* Category */}
                    <h3>
                        <span className="font-extrabold text-xl">Category: </span>
                        <span className="font-bold">{data.category}</span>
                    </h3>
                </div>
                {/* DESCRIPTION */}
                <div className="border-2 w-70 border-[#d8dfe0] rounded-lg p-3">
                    <h3 className="font-extrabold text-xl">Description: </h3>
                    <p className="text-sm">{data.description}</p>
                </div>
                {/* SHIPPING */}
                <div className="border-2 w-70 border-[#d8dfe0] rounded-lg p-3">
                    <h3>
                        <span className="font-extrabold text-xl">Shipping: </span>
                        <span className="font-bold">{data.shippingInformation}</span> <br />
                    </h3>
                    {/* Return Policy */}
                    <h3>
                        <span className="font-extrabold text-xl">Return Policy: </span>
                        <span className="font-bold">{data.returnPolicy}</span>
                    </h3>
                    {/* Availability */}
                    <h3>
                        <span className="font-extrabold text-xl">Availability: </span>
                        <span className="font-bold">{data.availabilityStatus}</span>
                    </h3>
                    {/* Minimun Order */}
                    <h3>
                        <span className="font-extrabold text-xl">Minimun Order: </span>
                        <span className="font-bold">{data.minimumOrderQuantity}</span>
                    </h3>
                    {/* Ratings */}
                    <h3>
                        <span className="font-extrabold text-xl">Ratings: </span>
                        <span className="font-bold">{data.rating} ({data.reviews.length} Reviews)</span>
                    </h3>
                    <h3>
                        <span className="font-extrabold text-xl">Warranty: </span>
                        <span className="font-bold">{data.warrantyInformation}</span>
                    </h3>
                </div>
                {/* QR CODE */}
                <div className="border-2 w-70 border-[#d8dfe0] rounded-lg p-3">
                    <span className="font-bold text-xl">Qr Code: </span>
                    <img
                        src={data.meta.qrCode}
                        alt={data.barcode}
                        className="w-20"
                    />
                    <h3>
                        <span className="font-bold">Bar Code: </span>
                        <span className="text-lg">{data.meta.barcode}</span>
                    </h3>
                </div>
                {/* ADD TO CARD BUTTON */}
                <button onClick={addCartReducer} className="w-70 py-3 bg-black text-white font-semibold rounded-lg shadow-md cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </>
    )
}

export default SingleProducts