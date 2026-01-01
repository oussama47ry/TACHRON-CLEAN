import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_img}
          alt="contact_img"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Boutique</p>
            <p className=" text-gray-500">
              Massire 2<br />  Temara,  milano
            </p>
            <p className=" text-gray-500">
              Tel: +212 7 15 77 91 09 <br /> Email: oryad@gmail.com
            </p>

            <p className="font-semibold text-xl text-gray-600">
              Visit Us
            </p>
            <p className=" text-gray-500">
              Monday - Friday: 10AM - 8PM <br />
              Saturday: 11AM - 7PM <br />
              Sunday: 12PM - 6PM
            </p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;