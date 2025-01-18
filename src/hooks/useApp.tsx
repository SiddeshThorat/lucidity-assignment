import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../store.type";
import { IDashboardState, TableData } from "../reducers/dashboardReducer/type";
import { getSummaryData, removeDollar } from "../utils/utils";
import { setAdmin, setData, setLoaders } from "../reducers/dashboardReducer/action";
import { useEffect } from "react";

const useApp = (): { 
  handleToggle: () => void,
  isAdmin: boolean,
  fetching: boolean,
  editItemDetails: (TableData & {
      index: number;
  }) | undefined
} => {

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
      dispatch(setLoaders({ loadername: 'fetching', status: false }))
      console.log("something went wrong")
    }
  };

  useEffect(() => {
    dispatch(setLoaders({ loadername: 'fetching', status: true }))
    fetchData()
  }, [])

  const handleToggle = () => {
    dispatch(setAdmin(!isAdmin))
  }

  return {
    handleToggle,
    isAdmin,
    fetching,
    editItemDetails
  }
}

export default useApp