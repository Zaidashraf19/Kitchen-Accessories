const Footer = () => {
    return (
        <>
            <div className="p-5 border-t-4 mt-5 bg-[#f6f6f6]">
            <h3 className="font-extrabold underline underline-offset-2 text-center text-xl uppercase">Contact Details</h3>
            <div className="flex justify-start text-xl items-center gap-8 list-none flex-wrap">
                    <div>
                        <h2 className="font-bold">Head office address</h2>
                        <li>47 W 13th St, New York, NY 10011, USA</li>
                    </div>
                    <div>
                        <h2 className="font-bold">Head office Number</h2>
                        <li>724-348-3246</li>
                    </div>
                    <div>
                        <h3 className="font-bold">Email Address</h3>
                        <li className="text-sm">kitchenaccessories@gmail.com</li>
                    </div>
                    <div>
                        <h3 className="font-bold">Free delivery number</h3>
                        <li>480-491-8111</li>
                        <li>478-284-7787</li>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer