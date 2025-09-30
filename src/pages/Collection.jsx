import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";
import { ShopContext } from "../context/CreateContext.jsx";
import ProductItem from "../components/ProductItem.jsx";
const Collection = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
       setCategory(prev => prev.filter(item => item !== value));
    } else {
       setCategory(prev => [...prev, value]);
    }
  };
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if(subCategory.includes(value)){
        setSubCategory(prev => prev.filter(item => item !== value));
    } else {
        setSubCategory(prev => [...prev, value]);
    }
  };

  const applyFilters = () => {
    let updatedList = products.slice();

    if (showSearch && search.trim() !== '') {
       updatedList = updatedList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      updatedList = updatedList.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
        updatedList = updatedList.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(updatedList);
  };

  const sortProducts = () =>{
    let sortedList = filterProducts.slice();

    switch (sortType) {
      case 'low-to-high':
        setFilterProducts(sortedList.sort((a,b)=> (a.price - b.price)));
        break;
      case 'high-to-low':
        setFilterProducts(sortedList.sort((a,b)=> (b.price - a.price)));
        break;
      default:
        applyFilters();
        break;
    }
  }

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch]);
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer sm:cursor-default gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Grains,Millets & Seeds"
                type="checkbox"
                value={"Grains,Millets & Seeds"}
                onChange={toggleCategory}
              />
              <label htmlFor="Grains,Millets & Seeds">
                Grains,Millets & Seeds
              </label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Pulses & Legumes"
                type="checkbox"
                value={"Pulses & Legumes"}
                onChange={toggleCategory}
              />
              <label htmlFor="Pulses & Legumes">Pulses & Legumes</label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Spices & Condiments"
                type="checkbox"
                value={"Spices & Condiments"}
                onChange={toggleCategory}
              />
              <label htmlFor="Spices & Condiments">Spices & Condiments</label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Oils & Ghee"
                type="checkbox"
                value={"Oils & Ghee"}
                onChange={toggleCategory}
              />

              <label htmlFor="Oils & Ghee">Oils & Ghee</label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Natural Sweeteners & Snacks"
                type="checkbox"
                value={"Natural Sweeteners & Snacks"}
                onChange={toggleCategory}
              />
              <label htmlFor="Natural Sweeteners & Snacks">
                Natural Sweeteners & Snacks
              </label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Herbal & Medicinal Products"
                type="checkbox"
                value={"Herbal & Medicinal Products"}
                onChange={toggleCategory}
              />
              <label htmlFor="Herbal & Medicinal Products">
                Herbal & Medicinal Products
              </label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3.5"
                id="Handcrafted / Village Specials"
                type="checkbox"
                value={"Handcrafted / Village Specials"}
                onChange={toggleCategory}
              />
              <label htmlFor="Handcrafted / Village Specials">
                Handcrafted / Village Specials
              </label>
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3.5" id="Dry Food Staples" type="checkbox" value={"Dry Food Staples"} onChange={toggleSubCategory}/>
              <label htmlFor="Dry Food Staples">Dry Food Staples</label>
            </p>
            <p className="flex gap-2">
              <input className="w-3.5" id="Flour & Powders" type="checkbox" value={"Flour & Powders"} onChange={toggleSubCategory}/>
              <label htmlFor="Flour & Powders">Flour & Powders</label>
            </p>
            <p className="flex gap-2">
              <input className="w-3.5" id="Liquid & Gel" type="checkbox" value={"Liquid & Gel"} onChange={toggleSubCategory}/>
              <label htmlFor="Liquid & Gel">Liquid & Gel</label>
            </p>
            <p className="flex gap-2">
              <input className="w-3.5" id="Drinks & Herbs" type="checkbox" value={"Drinks & Herbs"} onChange={toggleSubCategory}/>
              <label htmlFor="Drinks & Herbs">Drinks & Herbs</label>
            </p>
            <p className="flex gap-2">
              <input className="w-3.5" id="Artisan & Homeware" type="checkbox" value={"Artisan & Homeware"} onChange={toggleSubCategory}/>
              <label htmlFor="Artisan & Homeware">Artisan & Homeware</label>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Products"} />
          {/* Product Sort */}
          <select onChange={(e)=> setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relevant">Sort by:Relevant</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
        {/*Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
          {
            filterProducts.length === 0 && <p className="text-gray-500">No products found.</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
