"use client"

import Image from "next/image";

const CartModal = () => {

    const cartItems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-8 right-0 flex flex-col gap-6">
             { !cartItems ? (
                    <div className="text-gray-500">Cart is empty</div>
                ) : (
                    <>
                        <h2 className="text-xl">Shopping Cart</h2>
                        {/* // List */}

                        <div className="flex flex-col gap-8">
                            {/* Item */}
                            <div className="flex gap-4">
                                <Image src={'/product.png'} alt="" 
                                width={72} height={96}
                                className="object-cover rounded-md"/>

                                <div className="flex flex-col justify-between w-full">
                                    {/* top */}
                                    <div className="">
                                        {/* Title */}
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="font-semibold">Product name</h3>
                                            <div className="p-1 bg-gray-50 rounded-sm">$43</div>
                                        </div>
                                        {/* Desc */}
                                        <div className="text-sm text-gray-500">
                                            availble
                                        </div>
                                    </div>
                                    {/* Bottom */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">QTY. 2</span>
                                        <span className="text-blue-500 cursor-pointer">Remove</span>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex gap-4">
                                <Image src={'/product.png'} alt="" 
                                width={72} height={96}
                                className="object-cover rounded-md"/>

                                <div className="flex flex-col justify-between w-full">
                                    {/* top */}
                                    <div className="">
                                        {/* Title */}
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="font-semibold">Product name</h3>
                                            <div className="p-1 bg-gray-50 rounded-sm">$43</div>
                                        </div>
                                        {/* Desc */}
                                        <div className="text-sm text-gray-500">
                                            availble
                                        </div>
                                    </div>
                                    {/* Bottom */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">QTY. 2</span>
                                        <span className="text-blue-500 cursor-pointer">Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom */}
                        <div className="">
                            <div className="flex items-center justify-between font-semibold">
                                <span className="">Subtotal</span>
                                <span className="">$49</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout.</p>
                            <div className="text-sm flex justify-between">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                                <button className="rounded-md py-3 px-4 ring-1 bg-black text-white">Checkout</button>
                            </div>
                        </div>

                    </>                    
            )}                

        </div>

       
    )
}
export default CartModal;