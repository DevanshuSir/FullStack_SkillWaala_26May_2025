import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  {
    id: 1,
    title: "Classic Watch",
    image: "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwaef38d6c/2024/HO24/set_10282024_global/plp/1028_PLP_classic_watches_mobile.jpg",
    description: "Elegant and timeless watch for every occasion.",
    price: 2499,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    image: "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
    description: "Experience true wireless freedom and premium sound.",
    price: 3999,
  },
  {
    id: 3,
    title: "Leather Wallet",
    image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390",
    description: "Premium leather wallet with multiple compartments.",
    price: 899,
  },
  {
    id: 4,
    title: "Smartphone",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg",
    description: "Latest smartphone with high-resolution display and fast processor.",
    price: 19999,
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    image: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/307854_0_n3buu6.png",
    description: "Portable speaker with deep bass and long battery life.",
    price: 1499,
  },
  {
    id: 6,
    title: "Running Shoes",
    image: "https://m.media-amazon.com/images/I/71074fZToFL._UY1000_.jpg",
    description: "Comfortable and durable shoes for everyday running.",
    price: 2199,
  },
  {
    id: 7,
    title: "Sunglasses",
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?cs=srgb&dl=pexels-nitin-creative-46710.jpg&fm=jpg",
    description: "Stylish sunglasses with UV protection.",
    price: 799,
  },
  {
    id: 8,
    title: "Backpack",
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px.jpg?auto=webp&quality=75&width=1024",
    description: "Spacious backpack for travel and daily use.",
    price: 1299,
  },
  {
    id: 9,
    title: "Fitness Tracker",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/fitness-tracker-2048px-5344.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    description: "Track your activity and health metrics all day long.",
    price: 2799,
  },
  {
    id: 10,
    title: "Coffee Maker",
    image: "https://media.istockphoto.com/id/1366583927/photo/a-black-drip-electric-coffee-machine-with-a-glass-teapot-brews-a-morning-drink-household.jpg?s=612x612&w=0&k=20&c=7KhLNB3XaT82387LLCe7kSLcwIB4d6sDomwdr4S6wlM=",
    description: "Brew delicious coffee at home with ease.",
    price: 3299,
  },
];

const Products = () => {

  const dispatch = useDispatch()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 bg-white rounded-full p-2 shadow">
                  <FaHeart size={18} />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-blue-600">{product.price}</span>
                <button onClick={()=>{dispatch(addToCart(product))}} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                  <FaShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;