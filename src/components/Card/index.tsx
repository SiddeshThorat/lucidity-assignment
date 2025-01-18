import { useSelector } from "react-redux"
import { IAppState } from "../../store.type"
import { useMemo } from "react"
import { CartIcon } from "../Icons"
import { getSummaryData } from "../../utils/utils"

const CardsComponent = () => {
  const { summary } = useSelector((app: IAppState) => app.Dashboard)
  const dataArray = useMemo(() => {
    return [{
    icon: <CartIcon />,
    title: 'Total Product',
    value: summary.totalProducts
  }, {
    icon: <CartIcon />,
    title: 'Total Store Value',
    value: summary.totalStoreValue
    },
  {
    icon: <CartIcon />,
    title: 'Out of Stocks',
    value: summary.outOfStock
    },
  {
    icon: <CartIcon />,
    title: 'No. of Category',
    value: summary.noOfCategory
  }]
  }, [summary])
  
  return (
    <>
      {dataArray.map((i) => {
        return <div className="w-[23%] h-[80%] rounded-[20px] bg-[#243325] flex items-center justify-center">
            <div className="h-[80%] w-[80%] flex">
              <div className="w-[30%] flex mt-[25px] justify-center">
                {i.icon}
              </div>
              <div className="w-[70%]">
                <div className="mt-[25px]">{i.title}</div>
                <div className="text-[3rem] flex justify-start items-start">{i.value}</div>
              </div>
            </div>
          </div>
      })}
    </>
  )
}

export default CardsComponent