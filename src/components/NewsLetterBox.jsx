import React from "react";

const NewsLetterBox = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800 iceberg-regular">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-1 border-gray-400 pl-3 rounded-sm">
        <input className="w-full sm:flex-1 outline-none " type="email" placeholder="Enter your email" required/>
        <button type="submit" className="bg-gray-800 text-white text-xs px-6 py-4 cursor-pointer">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
