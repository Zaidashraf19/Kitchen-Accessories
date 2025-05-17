import useFetch from "../hooks/usefetch";
import Cart from "../components/card.jsx";

const Products = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products/category/kitchen-accessories');
    if (loading) {
        return <h1 className="text-3xl m-2 font-bold text-blue-900 animate__animated animate__flash animate__infinite">LOADING...</h1>
    }
    if (error) {
        return <h1 className="text-red-800 text-4xl text-center font-bold underline underline-offset-4 decoration-black decoration-dashed animate-pulse">ERROR OCCURRED...</h1>
    }
    return (
        <>
            <h1 className='m-6 underline underline-offset-4 decoration-double text-4xl font-bold text-center'>PRODUCTS</h1>
            <div className="flex justify-center flex-wrap gap-10 mx-5">
                {data.products.map((item , index) => {
                    return <Cart key={item.id}  id={item.id} product={item} title={item.title} description={item.description} image={item.thumbnail} index={index} />
                })}
            </div>
        </>
    )
}

export default Products