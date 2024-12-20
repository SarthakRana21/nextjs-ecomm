import ProductList from "./components/ProductList"
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage