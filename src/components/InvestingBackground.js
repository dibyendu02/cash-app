import React from 'react'
import bitcoin from "../images/investing/investing-bitcoin.png"
import stocks from "../images/investing/investing-stocks.png"
import graph1 from "../images/investing/investing-graph-1.png"
import graph2 from "../images/investing/investing-graph-2.png"
import graph3 from "../images/investing/investing-graph-3 1.png"


const InvestingBackground = () => {
  return (
    <div className="h-screen ">
        <div className="h-[40%] w-[100%] bg-white mt-[28%] absolute "></div>
        <img src={stocks} width="160px" className="absolute top-[30%] left-[36%] " />
        <img src={bitcoin} width="160px" className="absolute top-[30%] left-[53%] " />
        <img src={graph1} width="1024px" className="absolute bottom-0 left-[-20%] " />
        <img src={graph3} width="600px" className="absolute bottom-0 right-[0%] " />
    </div>
  )
}

export default InvestingBackground