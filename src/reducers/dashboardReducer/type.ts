export type IDashboardState = {
  isAdmin: boolean
  loaders: {
    fetching: boolean
  }
  data: TableData[]
  summary: {
    totalProducts: number
    totalStoreValue: number
    outOfStock: number
    noOfCategory: number
  }
  editItemDetails?: TableData & {
    index: number
  }
}

export type TableData = {
  isDisabled: boolean
  name: string
  category: string
  price: number
  quantity: number
  value: number
}