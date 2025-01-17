import { IDashboardState } from "./type"

export const SET_LOADERS = 'SET-LOADERS'
export const SET_DATA = 'SET_DATA'
export const SET_EDIT_DATA = 'SET_EDIT_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_ADMIN = 'SET_ADMIN'

export const setLoaders = (payload: { loadername: string, status: boolean }) => ({
  type: SET_LOADERS,
  payload
})

export const setData = (payload: { data: IDashboardState['data'], summary: IDashboardState['summary']}) => ({
  type: SET_DATA,
  payload
})

export const setEditData = (payload: IDashboardState['editItemDetails']) => ({
  type: SET_EDIT_DATA,
  payload
})

export const updateData = (payload: { data: IDashboardState['data'], summary: IDashboardState['summary']}) => ({
  type: UPDATE_DATA,
  payload
})

export const setAdmin = (payload: boolean) => ({
  type: SET_ADMIN,
  payload
})
