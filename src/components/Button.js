import React from 'react'

const Button = ({text, icon, bgColor}) => {
  return (
    <button className={`w-[170px] h-[50px] bg-${bgColor} p-[25px] flex justify-between items-center rounded border-solid border-2 border-${bgColor == "black" ? "white" : "black"}`}>
        <img src={icon} width="19px" alt='icon' />
        <p className="text-sm font-bold">{text}</p>
    </button>
  )
}

export default Button