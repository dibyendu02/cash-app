import React from 'react'

import stair1 from '../images/cash-card/boost-stairs-1.png'
import stair2 from '../images/cash-card/boost-stairs-2.png'
import burger from '../images/cash-card/boost-burger.png'
import coffee from '../images/cash-card/boost-coffee.png'
import card from '../images/cash-card/boost-card.png'
import shoe from '../images/cash-card/boost-shoe.png'
import hand from '../images/cash-card/boost-hand.png'


const CardBackground = () => {
  return (
    <div className="overflow-hidden ">
        <img src={stair1} width="930px" className="absolute right-0 top-0 bottom-[-10%]"/>
        <img src={stair2} width="550px" className="absolute left-0 bottom-[-25%]"/>
        <img src={burger} width="70px" className="absolute right-[28%] bottom-[35%]"/>
        <img src={coffee} width="80px" className="absolute right-[20%] bottom-[15%]"/>
        <img src={card} width="80px" className="absolute right-[20%] bottom-[55%]"/>
        <img src={shoe} width="100px" className="absolute right-[2%] bottom-[35%] "/>
        <img src={hand} width="75px" className="absolute right-[13%] top-[12%]"/>
    </div>
  )
}

export default CardBackground