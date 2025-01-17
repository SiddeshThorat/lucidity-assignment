import React, { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from './store.type';
import { setAdmin, setData, setEditData, setLoaders, updateData } from './reducers/dashboardReducer/action';
import { IDashboardState } from './reducers/dashboardReducer/type';

// Hooks
// Context
// Component folders
// test files
// memoisation ( if needed )
// Routes AND switch

const Toggle = ({ checked }: { checked: boolean } ) => {
  return (
    <div className="relative inline-block w-11 h-5">
      <input checked={checked} id="switch-component" type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300" />
      <label className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
  )
}

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
        return <div style={{ width: '23%', height: '80%', borderRadius: '20px', backgroundColor: '#243325', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <div style={{ height: '80%', width: '80%', display: 'flex' }}>
            <div style={{ width: '30%', display: 'flex', marginTop: '25px', justifyContent: 'center' }}>
              {i.icon}
            </div>
            <div style={{ width: '70%' }}>
              <div style={{ marginTop: '25px' }}>{i.title}</div>
              <div style={{ fontSize: '3rem', display: 'flex', justifyContent:'flex-start', alignItems:'flex-start'}}>{i.value}</div>
            </div>
          </div>
        </div>
      })}
    </>
  )
}

const CartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>

  )
}

const PencilIcon = ({ isDisabled }: { isDisabled: boolean }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${isDisabled ? 'gray' : 'green'}`} className="size-5">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>
}

const EyeIcon = ({ isDisabled }: { isDisabled: boolean }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${isDisabled ? 'gray' : 'purple'}`} className="size-5">
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
</svg>
}

const DeleteIcon = ({ isDisabled }: { isDisabled: boolean }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${isDisabled ? 'gray' : 'red'}`} className="size-5">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>
}

const CrossIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(169 196 52)" className="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

}

const Spinner = () => {
  return (
    <div role="status">
    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
  )
}

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
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ cursor: 'pointer' }} onClick={() => handleEdit(index)}><PencilIcon isDisabled={!isAdmin || data[index].isDisabled} /></div>
      <div style={{ cursor: 'pointer' }} onClick={() => handleEyeClick(index)}><EyeIcon isDisabled={!isAdmin} /></div>
      <div style={{ cursor: 'pointer' }} onClick={() => handleDelete(index)}><DeleteIcon isDisabled={!isAdmin || data[index].isDisabled} /></div>
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

const HeaderLabel = ({ text }: { text: string }) => {
  return <span className="text-xs font-medium me-2 px-2.5 py-2 rounded-[10%]"
  style={{
    color: 'rgb(169 196 52)',
    backgroundColor: '#161718',
    }}>{text}</span>
}

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
    <div style={{ borderBottom: 'solid 0.1rem #2F2F31', color: `${isDisabled ? '#a7a7a7' :'white'}` /* color: '#a7a7a7' */, height: '4rem', backgroundColor: "#212124", display:"flex", flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }} >
      <div className='flex-1' style={{ display: 'flex', width: '20%' }}>{name}</div>
      <div className='flex-1' style={{ display: 'flex' }}>{category}</div>
      <div className='flex-1' style={{ display: 'flex' }}>{price}</div>
      <div className='flex-1' style={{ display: 'flex' }}>{quantity}</div>
      <div className='flex-1' style={{ display: 'flex' }}>{value}</div>
      <div className='flex-1' style={{ display: 'flex', justifyContent: 'flex-start' }}>{action}</div>
    </div>
  )
}

const ModalComponent = () => {
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
  <div  className="relative z-10 bg-gray" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div style={{ backgroundColor: '#282B27' }} className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <h3 style={{ fontSize: '1.5rem' }} className="text-base font-semibold to-white" id="modal-title">Edit Product</h3>
                    <span style={{ padding: '2px', borderRadius: '5px', backgroundColor: 'black', cursor: 'pointer' }} onClick={handleClose} ><CrossIcon /></span>
                </div>
                  <h4 className="text-base font-semibold to-white" id="modal-title">{editItemDetails?.name || ""}</h4>
                <div className="mt-7">
                  <div style={{ height: '80px', display: 'flex' }}>
                      <div style={{ width: '50%', display: 'flex', gap: 10 , flexDirection: 'column'}}>
                        <span style={{ fontSize: '0.7rem' }}>Category</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input onChange={(e) => handleChange(e, 'category')} value={fields?.category} className="w-[90%] bg-transparent placeholder:text-slate-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ fontSize: '0.7rem' }}>Price</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input type='number' onChange={(e) => handleChange(e, 'price')} value={fields?.price} className="w-[90%] bg-transparent placeholder:text-slate-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                      </div>
                  </div>
                  <div style={{ height: '80px',  display: 'flex'  }}>
                      <div style={{ width: '50%' }}>
                        <span style={{ fontSize: '0.7rem' }}>Quantity</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input type='number' onChange={(e) => handleChange(e, 'quantity')} value={fields?.quantity}  className="w-[90%] bg-transparent placeholder:text-slate-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ fontSize: '0.7rem' }}>Value</span>
                        <div className="w-full max-w-sm min-w-[200px]">
                          <input type='number' onChange={(e) => handleChange(e, 'value')} value={fields?.value}  className="w-[90%] bg-transparent placeholder:text-slate-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                      </div>
                  </div>
                </div>
                <div className="mt-2 flex" style={{ justifyContent: 'flex-end', gap: 10, alignItems: 'center' }}>
                  <span onClick={handleClose} style={{ cursor: 'pointer'}}>Cancel</span>
                  <button style={{ padding: '5px 10px 5px 10px', backgroundColor: 'gray', borderRadius: '20px' }} onClick={handleSave}>Save</button>
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

const getSummaryData = (data: IDashboardState['data']): IDashboardState['summary'] => {
   const uniqueCategories: any = {}
  return data.reduce((obj, curr) => {
    let localCategoryCount = obj.noOfCategory
    if (!uniqueCategories[curr.category]) {
      uniqueCategories[curr.category] = true
      localCategoryCount = localCategoryCount + 1
    }
    return {
      totalProducts: obj.totalProducts + curr.quantity,
      totalStoreValue: obj.totalStoreValue + Number(curr.value),
      outOfStock: curr.quantity === 0 ? obj.outOfStock + 1 : obj.outOfStock,
      noOfCategory: localCategoryCount
    }
  }, {
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStock: 0,
    noOfCategory: 0
  }) 
}

const removeDollar = (input: string): number => {
  if (input.includes('$')) {
    return Number(input.split('$')[1])
  }
  return Number(input)
}

function App() {
  const { loaders: { fetching }, data, editItemDetails, isAdmin } = useSelector((app: IAppState) => app.Dashboard)
  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory'); // Replace with your API URL
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const formattedData: IDashboardState['data'] = data.map((d: any) => {
        return {
          ...d,
          isDisabled: !isAdmin,
          price: removeDollar(d.price),
          quantity: d.quantity,
          value: removeDollar(d.value)
        }
      })
      const summaryData: IDashboardState['summary'] = getSummaryData(formattedData) 
      dispatch(setData({ data: formattedData, summary: summaryData  }))
    } catch (error) {
      
    }
  };

  useEffect(() => {
    dispatch(setLoaders({ loadername: 'fetching', status: true }))
    fetchData()
  }, [])

  console.log("checking data", data)

  const handleToggle = () => {
    dispatch(setAdmin(!isAdmin))
  }
  
  return (
    <div className="App">
      <div className="App-header p-7 pt-0">
        <div style={{
          width: '100%',
          height: '7vh',
          // borderBottom: 'solid 0.001rem white',
          display: 'flex',
          justifyContent: 'flex-end',
          // backgroundColor: 'purple',
          alignItems: 'center'
        }} >
          <div style={{ display: 'flex', gap: 10}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10,  paddingRight: '18px' }}>
              <span>admin</span>
              <span onClick={handleToggle}><Toggle checked={!isAdmin} /></span>
              <span>user</span>
            </div>
            <div style={{ borderLeft: 'solid 0.001rem white', paddingLeft: '20px' }}>
              <img src='/assets/images.png' height={20} width={20} />
            </div>
          </div>
        </div>
        <div style={{ height: '13vh', fontSize: '4rem', fontWeight: 200 }}>
          Inventory Stats
        </div>
        <div style={{ height: '20vh', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <CardsComponent />
        </div>
        <div style={{ height: '60vh', borderRadius: '20px'}}>
          {fetching ? <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center'  }}><Spinner /></div> : <Table />}
        </div>
        {editItemDetails && <ModalComponent />}
      </div>
    </div>
  );
}

export default App;
