import React from "react";
import { FaBagShopping , FaGamepad , FaLaptop , FaMobile } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { GiShinyApple } from "react-icons/gi";
   import { GiNailedFoot } from "react-icons/gi";

const Category = () => {
  const categories = [
    { name: "All", icon: <FaBagShopping /> },
    { name: "Cafe", icon: <CiCoffeeCup/> },
    { name: "Home", icon: <IoHome/> },
    { name: "Toys", icon: <FaGamepad/>},
    { name: "Freash", icon: <GiShinyApple/> },
    { name: "Electronics", icon: <FaLaptop/> },
    { name: "Mobile", icon: <FaMobile/> },
    { name: "Beauty", icon: <GiNailedFoot/> },
 
  ];

  return <div className="w-full">
    <div className="max-w-7xl mx-auto px-4">
            <div className="flex sm:justify-center overflow-x-auto">
                        {
                            categories.map((cat,index)=>(
                                <div key={index}
                                className="flex flex-col items-center min-w-[80px] text-sm text-gray-800 hover:text-purple-500 hover:cursor-pointer"
                                >
                                    <div className="text-2xl mb-1">{cat.icon}</div>
                                    <div className="text-center">{cat.name}</div>
                                </div>
                            ))
                        }
            </div>
    </div>
  </div>;
};

export default Category;
