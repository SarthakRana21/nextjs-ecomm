import Link from "next/link";
import Image from "next/image"

const ProductList = () => {
    return (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap w-full h-80">
            <Link href={'/test'} className="relative w-full h-80">
                <Image src="https://images.pexels.com/photos/29493395/pexels-photo-29493395/free-photo-of-stylish-winter-fashion-in-snowy-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="test" fill sizes="25vw"/>
            </Link>
        </div>
    )
}
export default ProductList;