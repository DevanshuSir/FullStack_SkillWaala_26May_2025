import React from "react";

// Example cart items (in a real app, this would come from context or props)
const initialCart = [
  {
    id: 1,
    title: "Classic Watch",
    image:
      "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwaef38d6c/2024/HO24/set_10282024_global/plp/1028_PLP_classic_watches_mobile.jpg",
    description: "Elegant and timeless watch for every occasion.",
    price: 2499,
    quantity: 1,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    image:
      "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
    description: "Experience true wireless freedom and premium sound.",
    price: 3999,
    quantity: 2,
  },
];

const Cart = () => {
 

 

 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-11">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
          <div className="space-y-6">
            {initialCart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-md shadow"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-blue-600 font-bold text-lg">₹{item.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        
                        aria-label="Decrement"
                      >
                        -
                      </button>
                      <span className="px-2 font-medium">{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                       
                        aria-label="Increment"
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-auto text-gray-700 font-semibold">
                      ₹20000
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end items-center mt-8">
              <span className="text-xl font-bold text-gray-800 mr-2">Total:</span>
              <span className="text-2xl font-bold text-blue-600">₹100000</span>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Cart;
