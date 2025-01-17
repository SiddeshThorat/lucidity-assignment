// import { INCREMENT, DECREMENT } from '../actions/actionTypes';

import { SET_LOADERS, SET_DATA, SET_EDIT_DATA, UPDATE_DATA, SET_ADMIN } from "./action";
import { IDashboardState } from "./type";

const initialState: IDashboardState = {
  isAdmin: true,
  loaders: {
    fetching: false
  },
  data: [],
  summary: {
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStock: 0,
    noOfCategory: 0,
  },
  editItemDetails: undefined
};

const dashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADERS: {
      return {
        ...state,
        loaders: {
          ...state.loaders,
          [action.payload.loadername]: action.payload.status
        }
      }
    }
    case SET_DATA: {
      return {
        ...state,
        data: action.payload.data,
        summary: action.payload.summary,
        loaders: {
          ...state.loaders,
          fetching: false
        }
      }
    }
    case SET_EDIT_DATA: {
      return {
        ...state,
        editItemDetails: action.payload
      }
    }
    case SET_ADMIN: {
      return {
        ...state,
        data: state.data.map((d) => ({ ...d, isDisabled: !action.payload })),
        isAdmin: action.payload
      }
    }
    case UPDATE_DATA: {
      return {
        ...state,
        data: action.payload.data,
        summary: action.payload.summary,
        editItemDetails: undefined
      }
    }
    default:
      return state;
  }
};

export default dashboardReducer;