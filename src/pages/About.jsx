import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets.js";
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] max-h-200 rounded-2xl shadow-2xl"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gra">
          <p>
            Welcome to our store! We’re passionate about bringing you
            high-quality, affordable products that fit seamlessly into your
            everyday life. Each item is carefully selected to ensure freshness,
            value, and satisfaction. Whether it’s healthy grains, organic
            ingredients, or essential daily goods, we focus on quality and
            trust. Our goal is simple
          </p>
          <p>
            — to make your shopping experience easy, reliable, and enjoyable. We
            believe in honesty, transparency, and building long-term
            relationships with our customers. Thank you for choosing us and
            being a part of our journey toward a healthier and happier
            lifestyle. 🌿
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To provide high-quality, affordable products that enhance everyday
            life, while ensuring a seamless, trustworthy, and enjoyable shopping
            experience for every customer.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-2">
        <div className="border border-gray-400 text-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-101 bg-slate-50 hover:bg-slate-100 px-10 md:px-16 py-8 sm:py-14 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-gray-400 text-gray-700 rounded-2xl shadow-md hover:shadow-2xl hover:scale-101 bg-slate-50 hover:bg-slate-100 px-10 md:px-16 py-8 sm:py-14 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-gray-400 text-gray-700 rounded-2xl shadow-md hover:shadow-2xl hover:scale-101 bg-slate-50 hover:bg-slate-100 px-10 md:px-16 py-8 sm:py-14 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
