import React from 'react'
import bgImage from '../images/payments/Vector.png'
import column1 from '../images/payments/payments-column.png'
import column3 from '../images/payments/payments-column (2).png'
import pillarLarge from '../images/payments/payments-pillar-large.png'
import pillarMedium from '../images/payments/payments-pillar-medium.png'
import pillarSmall from '../images/payments/payments-pillar-small.png'


const PaymentBackground = () => {
  return (
    <div className="overflow-hidden ">
        <img src={bgImage} className="w-full absolute bottom-[3%]"/>

        <img src={column1} className="w-[810px] absolute right-0 bottom-[10%]"/>
        <img src={column3} className="w-[810px] z-10 absolute left-[28%] bottom-[0]"/>
        <img src={column3} className="w-[810px] z-10 absolute left-[-40%] bottom-[0]"/>

        <img src={pillarLarge} className="w-[210px] absolute left-[48%] bottom-[10%]"/>
        <img src={pillarMedium} className="w-[172px] absolute right-[16%] bottom-[25%]"/>
        <img src={pillarMedium} className="w-[172px] absolute left-[48%] bottom-[-8%]"/>
        <img src={pillarMedium} className="w-[172px] z-10 absolute left-[40%] bottom-[10%]"/>
        <img src={pillarMedium} className="w-[172px] z-10 absolute left-[15%] bottom-[8%]"/>
        <img src={pillarSmall} className="w-[135px] z-5 absolute left-[22%] bottom-[15%]"/>
    </div>
  )
}

export default PaymentBackground