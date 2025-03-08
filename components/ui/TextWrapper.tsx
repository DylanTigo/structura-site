
const TextWrapper = ( {children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    <span className={`overflow-hidden block w-fit ${className}`}>{children}</span>
  )
}

export default TextWrapper