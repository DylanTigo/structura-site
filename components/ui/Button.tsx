import React from 'react'

const Button = ({children, type, className}: {children: React.ReactNode, type: "primary" | "secondary", className?: string}) => {

  const classes = type === "primary" ? "bg-amber-200 text-black" : "text-white"
  className = classes ? `${className} ${classes}` : className

  return (
    <button className={`flex justify-center items-center px-5 py-2.5 border border-amber-200 ${className}`}>{children}</button>
  )
}

export default Button