import React from "react";
import phone from "../images/payments/payments-phone 1.png"
import PaymentBackground from "../components/PaymentBackground";

const Payment = () => {
  return (
    <div
    // style={{ backgroundImage: `url(${bgImage})`,  backgroundSize: "cover"}}
    className="h-[105vh] relative flex items-center">
        
        <PaymentBackground/>

      <div className="w-80 ml-80 mb-40 font-agrandir flex flex-col gap-4">
        <h1 className="w-[336px] text-green-500 text-[40px] font-extrabold leading-10 ">Payments</h1>
        <p className="text-sm font-normal leading-snug tracking-tight">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
        <img src={phone} alt="phone" width="750px" className="absolute left-[25%] bottom-[30%] "/>
      </div>
    </div>
  );
};

export default Payment;
