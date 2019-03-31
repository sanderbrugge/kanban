import { SwimmingLane } from "../api/interfaces";
import { Reducer } from "redux";
import { fetchSwimmingLaneData } from "../api/user.service";

export interface Action {
  type: string;
  payload: any;
}

export const initialState: SwimmingLane[] = []

export const types = {
  FETCH_DATA: "LANE/FETCH_DATA"
}

const swimmingLaneReducer: Reducer<SwimmingLane[], any> = (state = initialState, action: Action) => {
  switch(action.type) {
    case types.FETCH_DATA: return action.payload;
    default: return state;
  }
}

export const actions = {
  fetchData: () => ({ type: types.FETCH_DATA, payload: fetchSwimmingLaneData() })
}

export default swimmingLaneReducer;
