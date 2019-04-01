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

  SWAP_USER: "LANE/SWAP_USER",

  ADD_USER: "LANE/ADD_USER"
};

const swimmingLaneReducer: Reducer<SwimmingLane[], any> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return action.payload;
    case types.SWAP_USER: {
      const newState = [...state];
      swapUserToLane(newState, action.payload.user, action.payload.toLane);
      return newState;
    }
    case types.ADD_USER: {
      const newState = [...state];
      const lane = newState.find(lane => lane.id === action.payload.toLaneId);
      if (lane) {
        lane.users.push(action.payload.user);
      }

      return newState;
    }
    default:
      return state;
  }
};

function swapUserToLane(
  state: SwimmingLane[],
  user: User,
  toLane: SwimmingLane
) {
  state.map(lane => {
    const index = lane.users.findIndex(item => item.id === user.id);
    if (index !== -1) {
      lane.users.splice(index, 1);
    }
  });

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
  }),
  addUser: (user: User, toLaneId: string) => ({
    type: types.ADD_USER,
    payload: { user, toLaneId }
  })
};

export default swimmingLaneReducer;
