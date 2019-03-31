import { SwimmingLane, User } from "../api/interfaces";
import { Reducer } from "redux";
import { fetchSwimmingLaneData } from "../api/user.service";

export interface Action {
  type: string;
  payload: any;
}

export const initialState: SwimmingLane[] = [];

export const types = {
  FETCH_DATA: "LANE/FETCH_DATA",

  SWAP_USER: "LANE/SWAP_USER"
};

const swimmingLaneReducer: Reducer<SwimmingLane[], any> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return action.payload;
    case types.SWAP_USER: {
      swapUserToLane(action.payload.user, action.payload.toLane);
      return state;
    }
    default:
      return state;
  }
};

function swapUserToLane(user: User, toLane: SwimmingLane) {
  // const index = fromLane.users.findIndex(item => item.id === user.id);
  // fromLane.users.splice(index, 1);
  toLane.users.push(user);
}

export const actions = {
  fetchData: () => ({
    type: types.FETCH_DATA,
    payload: fetchSwimmingLaneData()
  }),
  swapUser: (user: User, toLane: SwimmingLane) => ({
    type: types.SWAP_USER,
    payload: { user, toLane }
  })
};

export default swimmingLaneReducer;
