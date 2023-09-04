import React from 'react'

import hole from '../images/banking/banking-hole.png'
import track1 from '../images/banking/banking-track-1.png'
import column from '../images/banking/banking-column.png'
import track2 from '../images/banking/banking-track-2.png'
import ramp1 from '../images/banking/banking-ramp-1.png'
import ramp2 from '../images/banking/banking-ramp-2.png'
import stair1 from '../images/banking/banking-stairs-1.png'
import stair2 from '../images/banking/banking-stairs-2.png'
import tube from '../images/banking/banking-tube.png'
import cube from '../images/banking/banking-cubes.png'
import monster from '../images/banking/banking-monster.png'

const BankingBackground = () => {
  return (
    <div className="overflow-hidden ">


        <img src={hole} width="380px" className="absolute left-[0] top-[0]"/>
        <img src={column} width="130px" className="absolute left-[5%] top-[13%]"/>
        <img src={track1} width="270px" className="absolute left-[25%] top-[25%]"/>
        <img src={track2} width="250px" className="absolute right-[15%] top-[2%]"/>
        <img src={ramp1} width="280px" className="absolute right-[28%] top-[25%]"/>
        <img src={stair1} width="90px" className="absolute right-[10%] top-[40%]"/>
        <img src={stair2} width="80px" className="absolute left-[5%] bottom-[15%]"/>
        <img src={ramp2} width="300px" className="absolute left-[12%] bottom-[5%]"/>
        <img src={tube} width="150px" className="absolute left-[35%] bottom-0"/>
        <img src={hole} width="380px" className="z-1 absolute right-[26%] bottom-[-20%]"/>
        <img src={cube} width="240px" className="z-1 absolute right-[26%] bottom-[15%] "/>
        <img src={monster} width="120px" className="z-1 absolute right-[5%] bottom-[7%] "/>

        
    </div>
  )
}

export default BankingBackground