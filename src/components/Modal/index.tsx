import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEditData, updateData } from "../../reducers/dashboardReducer/action"
import { IAppState } from "../../store.type"
import { getSummaryData } from "../../utils/utils"
import { CrossIcon } from "../Icons"

const EditModal = () => {
  const dispatch = useDispatch()
  const { editItemDetails, data } = useSelector((app: IAppState) => app.Dashboard)
  const [fields, setFields] = useState({
    category: '',
    value: '',
    quantity: '',
    price: ''
  })

  const handleClose = () => {
    dispatch(setEditData(undefined))
  }

  useEffect(() => {
    if (editItemDetails) {
      setFields({
        category: editItemDetails.category,
        value: String(editItemDetails.value),
        quantity: String(editItemDetails.quantity),
        price: String(editItemDetails.price)
      })
    }
  }, [editItemDetails])

  const handleChange = (e: any, key: keyof typeof fields) => {
    setFields((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value
      }
    })
  }


  const handleSave = () => {

    if (!editItemDetails) return

    const clonedData = [...data]
    clonedData[editItemDetails?.index] = {
      isDisabled: editItemDetails.isDisabled,
      name: editItemDetails.name,
      category: fields.category,
      price: Number(fields.price),
      quantity: Number(fields.quantity),
      value: Number(fields.value)
    }
    const summarydata = getSummaryData(clonedData)
    dispatch(updateData({ data: clonedData,  summary: summarydata }))
  }

  return (
  <div className="relative z-10 bg-gray" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-[#282B27] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="flex justify-between w-full">
                    <h3 className="text-2xl font-semibold text-white" id="modal-title">
                      Edit Product
                    </h3>
                    <span
                      className="p-1 rounded bg-black cursor-pointer"
                      onClick={handleClose}
                    >
                      <CrossIcon />
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white" id="modal-title">
                    {editItemDetails?.name || ""}
                  </h4>
                  <div className="mt-7">
                    <div className="h-20 flex">
                      <div className="w-1/2 flex flex-col gap-2">
                        <span className="text-[0.7rem]">Category</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input
                            onChange={(e) => handleChange(e, "category")}
                            value={fields?.category}
                            className="w-[90%] bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <span className="text-[0.7rem]">Price</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input
                            type="number"
                            onChange={(e) => handleChange(e, "price")}
                            value={fields?.price}
                            className="w-[90%] bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-20 flex">
                      <div className="w-1/2">
                        <span className="text-[0.7rem]">Quantity</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input
                            type="number"
                            onChange={(e) => handleChange(e, "quantity")}
                            value={fields?.quantity}
                            className="w-[90%] bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <span className="text-[0.7rem]">Value</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input
                            type="number"
                            onChange={(e) => handleChange(e, "value")}
                            value={fields?.value}
                            className="w-[90%] bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end gap-2 items-center">
                    <span className="cursor-pointer" onClick={handleClose}>
                      Cancel
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-500 rounded-full"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default EditModal