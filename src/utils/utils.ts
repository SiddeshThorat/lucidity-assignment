import { IDashboardState } from "../reducers/dashboardReducer/type"

export const getSummaryData = (data: IDashboardState['data']): IDashboardState['summary'] => {
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

export const removeDollar = (input: string): number => {
  if (input.includes('$')) {
    return Number(input.split('$')[1])
  }
  return Number(input)
}
