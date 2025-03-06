import React from 'react'

const Button = ({children, type}: {children: React.ReactNode, type: "primary" | "secondary"}) => {

  const classes = type === "primary" ? "bg-amber-200 text-black" : "text-white"

  return (
    <button className={`flex justify-center items-center px-5 py-2.5 border border-amber-200 ${classes}`}>{children}</button>
  )
}

export default Button