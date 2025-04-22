const Checkout = () => {
    return (
        <>
            <h1 className="m-6 underline underline-offset-4 text-4xl font-bold text-center">CHECK OUT</h1>
            <div className="bg-[#f6f6f6] flex flex-col gap-5 p-10 w-full">
                {/* EMAIL */}
                <div className="bg-white p-5 w-3/4">
                    <h3>
                        <li>Enter Email</li>
                    </h3>
                    <input type="email" placeholder="Email *" required className="border-b border-[#81807f] w-full p-3" />
                </div>
                {/* ADDRESS */}
                <div className="bg-white p-5 w-3/4">
                    <h3>
                        <li>Shipping</li>
                    </h3> <br />
                    <b>Customer Details</b> <br />
                        <input type="text" placeholder="First Name *" required className="border-b border-[#81807f] w-full p-3" />
                        <input type="text" placeholder="Last Name *" required className="border-b border-[#81807f] w-full p-3" />
                    <input type="text" placeholder="Mobile Number *" required className="border-b border-[#81807f] w-full p-3" />
                    <input type="text" placeholder="Street Address/House Number *" required className="border-b border-[#81807f] w-full p-3" />
                        <input type="text" placeholder="Country *" required className="border-b border-[#81807f] w-full p-3" />
                        <input type="text" placeholder="State/Province *" required className="border-b border-[#81807f] w-full p-3" />
                        <input type="text" placeholder="City *" required className="border-b border-[#81807f] w-full p-3" />
                </div>
                {/* PAYMENT */}
                <div className="bg-white p-5 w-3/4">
                    <h3>
                        <li>Payment</li>
                    </h3>
                    <form>
                        {/* CASH ON DELIVER */}
                        <div className="border border-[#81807f] py-7 px-3 my-4">
                            <input type="radio" name="payment" />
                            <label className="">COD</label>
                        </div>
                        {/* ONLINE PAYMENT */}
                        <div className="border border-[#81807f] py-7 px-3 my-4">
                            <input type="radio" name="payment" />
                            <label htmlFor="">CREDIT/DEBIT CARD</label>
                        </div>
                    </form>
                </div>
                <button 
                onClick={() => alert("Order Placed ")} 
                className=" items-center w-1/2 py-3 bg-black text-white font-semibold rounded-lg shadow-md cursor-pointer">
                    Place Order
                </button>
            </div>
        </>
    )
}

export default Checkout