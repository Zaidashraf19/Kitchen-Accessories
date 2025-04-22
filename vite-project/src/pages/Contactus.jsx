const contact = () => {
    return (
        <>
            <h1 className="m-6 underline underline-offset-4 text-4xl font-bold text-center">CONTACT US</h1> <hr className="border border-[#81807f]" /> <br />
            <div className="m-3 p-3">
                <p className="font-bold text-[#81807f]">Have a question or comment? Use the form below to send us a message</p> <br />
                <form>
                    <label className="font-semibold">Your Name *</label> <br /> <br />
                    <input type="text" className="border border[#f6f6f6] w-2/3 p-3" /> <br /> <br />
                    <label className="font-semibold">Phone Number *</label> <br /> <br />
                    <input type="text" className="border border[#f6f6f6] w-2/3 p-3" />  <br /> <br />
                    <label className="font-semibold">Your Email *</label> <br /> <br />
                    <input type="text" className="border border[#f6f6f6] w-2/3 p-3" />  <br /> <br />
                    <label className="font-semibold">Your Comment *</label> <br /> <br />
                    <input type="text" placeholder="               Please leave your comment here" className="border border[#f6f6f6] w-full h-25 p-2" />
                </form> <br />
                <button
                    onClick={() => alert("Message Sent")}
                    className=" items-center w-1/2 py-3 bg-black text-white font-semibold rounded-lg shadow-md cursor-pointer">
                    Sent Message
                </button>
            </div>
        </>
    )
}
export default contact