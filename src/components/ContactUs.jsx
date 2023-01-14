import styles from "../style";
import Button from "./Button";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const ContactUs = () => (
  <section id="contact" className={`${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-col md:flex-row justify-between md:space-y-0 space-y-6">
      <div className="flex flex-col space-y-8 justify-between">
        <div>
          <h2 className={`font-bold font-poppins text-4xl tracking-normal text-white mt-4`}>
            Get in Touch
          </h2>
          <p className={`${styles.paragraph} mt-4 leading-6 tracking-wider`}>
            Try out the Best Travel consultation Services from the most trusted Agency.
          </p>
        </div>

      
        <div className=" space-y-4 md:space-y-6  font-poppins text-white">
          <div className="flex space-x-4 items-center">
            <IoMdCall className=" text-[25px]"/>
            <span>+254 759 663 648</span>
          </div>
          
          <div className="flex space-x-4 items-center">
            <MdMail className=" text-[25px]"/>
            <span className="text-md md:text-lg">raphaeloyaro@gmail.com</span>
          </div>

          <div className="flex space-x-4 items-center">
            <MdLocationOn className=" text-[25px]"/>
            <span>Rd. Katani, Syokimau</span>
          </div>
        </div>

        <a href="http://"></a>


        <div className="flex space-x-4 text-lg text-white">
          <a href="https://www.instagram.com">
            <FiInstagram/>
          </a>

          <a href="https://www.instagram.com">
            <FaFacebook/>
          </a>

          <a href="https://www.instagram.com">
            <BsTwitter/>
          </a>
        </div>
      </div>
      

      
    <div className="font-poppins">
      <div className="bg-white shadow-lg p-8 rounded-xl">
        <form action="" method="post" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="" className="text-sm">Your Name</label>
            <input type="text" placeholder="Your Name" className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>

          <div>
            <label htmlFor="" className="text-sm">Your Email</label>
            <input type="email" placeholder="Email Address" className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>

          <div>
            <label htmlFor="" className="text-sm">Your Message</label>
            <textarea type="message" placeholder="Your Message" rows={5} className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>
          
          <button type="button" className={`py-2 px-6 self-end font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            send Message
          </button>
        </form>
      </div>
    </div>
    
    </div>
    
  </section>
);

export default ContactUs;
