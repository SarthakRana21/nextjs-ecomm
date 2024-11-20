"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {

    const [isProfileOpen, setProfileOpen] = useState(false);
    const [iscartOpen, setCartOpen] = useState(false);
    const router = useRouter();

    //TEMPORARY
    const isLoggedIn = true;
    
    const handleProfile = () => {
        !isLoggedIn ? router.push('/login') : setProfileOpen((prev) => !prev);
    }

    return (
        <div className="flex items-center gap-4 lg:gap-6 xl:8 relative">
            <Image src={"/profile.png"} alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-8 left-[-1.75rem] text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 max-w-none">
                    <Link href={'/'}>Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            )}

            <Image src={"/notification.png"} alt="" width={22} height={22} className="cursor-pointer"/>
            
            <div className="cursor-pointer relative" onClick={() => setCartOpen((prev) => !prev)}>
                <Image src={"/cart.png"} alt="" width={22} height={22} className="max-w-none" />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {iscartOpen && (
                <CartModal />
            )}

        </div>
    )
}
export default NavIcons;