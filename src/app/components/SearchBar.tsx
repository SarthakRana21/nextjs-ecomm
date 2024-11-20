"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Searchbar = () => {

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("search") as string;
        if(name) {
            router.push(`/list?name=${name}`)
        }
        e.currentTarget.reset();
    }

    return (
        <form className="flex items-center justify-between gap-4 bg-gray-100 px-4 py-2 rounded-full flex-1 mr-[10%] lg:mr-[10%]" onSubmit={handleSearch}>
            <input type="text" name="search" className="outline-none flex-1 bg-transparent" placeholder="Search" />
            <button className="cursor-pointer">
                <Image src={"/search.png"} alt="" width={16} height={16} className="max-w-none"/>
            </button>
        </form>
    )

}

export default Searchbar;   