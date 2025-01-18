import { useMemo, ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setData, setEditData } from "../../reducers/dashboardReducer/action"
import { IDashboardState } from "../../reducers/dashboardReducer/type"
import { IAppState } from "../../store.type"
import { PencilIcon, EyeIcon, DeleteIcon } from "../Icons"
import { getSummaryData } from "../../utils/utils"
import HeaderLabel from "./HeaderLabel"
import Row from "./Row"

const ActionComponent = ({ index }: { index: number }) => {
  const dispatch = useDispatch()
  const { data, isAdmin, summary } = useSelector((app: IAppState) => app.Dashboard)
  const handleDelete = (i: number) => {
    if (!isAdmin || data[index].isDisabled) return
    const updatedData = [...data]
    updatedData.splice(i, 1) // removes 1 elements starting from i index

    const summaryData: IDashboardState['summary'] = getSummaryData(updatedData) 
    dispatch(setData({ data: updatedData, summary: summaryData  }))
  }

  const handleEdit = (i: number) => {
    if (!isAdmin || data[index].isDisabled) return
    dispatch(setEditData({ ...data[i], index: i }))
  }

  const handleEyeClick = (i: number) => {
    const updatedData = [...data]
    updatedData[i] = { ...updatedData[i], isDisabled: !updatedData[i].isDisabled }
    dispatch(setData({ data: updatedData, summary  }))
  }

  return (
    <div className="flex gap-2.5">
      <div className="cursor-pointer" onClick={() => handleEdit(index)}>
        <PencilIcon isDisabled={!isAdmin || data[index].isDisabled} />
      </div>
      <div className="cursor-pointer" onClick={() => handleEyeClick(index)}>
        <EyeIcon isDisabled={!isAdmin} />
      </div>
      <div className="cursor-pointer" onClick={() => handleDelete(index)}>
        <DeleteIcon isDisabled={!isAdmin || data[index].isDisabled} />
      </div>
    </div>
  )
}

const Table = () => {

  const { data, isAdmin } = useSelector((app: IAppState) => app.Dashboard)

  const requiredData = useMemo(() => {
    return data.map((d, index) => {
      return {
        ...d,
        actionComponent: <ActionComponent index={index} />
      }
    })
  }, [data])

  return (
    <>
      <Row
        name={<HeaderLabel text='Name' />}
        category={<HeaderLabel text='Category' />}
        price={<HeaderLabel text='Price' />}
        quantity={<HeaderLabel text='Quantity' />}
        value={<HeaderLabel text='Value' />}
        action={<HeaderLabel text='Action' />}
        isDisabled={false}
      />
      {requiredData.map((rowData) => {
        return (
          <Row
            name={rowData.name}
            category={rowData.category}
            price={`$${rowData.price}`}
            quantity={`$${rowData.quantity}`}
            value={`$${rowData.value}`}
            action={rowData.actionComponent}
            isDisabled={rowData.isDisabled || !isAdmin}
          />
        )
      })}
    </>
  )
}

export default Table