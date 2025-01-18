import { ReactNode } from "react"

const Row = ({
  name,
  category,
  price,
  quantity,
  value,
  action,
  isDisabled
}: {
    name: ReactNode,
    category: ReactNode
    price: ReactNode
    quantity: ReactNode
    value: ReactNode
    action: ReactNode
   isDisabled: boolean
}) => {
  return (
  <div 
    className={`border-b border-solid ${isDisabled ? 'text-[#a7a7a7]' : 'text-white'} h-16 bg-[#212124] flex flex-grow justify-between items-center`}>
    <div className="flex-1 flex w-1/5 ml-2">{name}</div>
    <div className="flex-1 flex">{category}</div>
    <div className="flex-1 flex">{price}</div>
    <div className="flex-1 flex">{quantity}</div>
    <div className="flex-1 flex">{value}</div>
    <div className="flex-1 flex justify-start">{action}</div>
  </div>
  )
}

export default Row