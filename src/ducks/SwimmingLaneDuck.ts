import { SwimmingLane, User } from "../api/interfaces";
import { Reducer } from "redux";
import { fetchSwimmingLaneData } from "../api/user.service";
import produce from "immer";

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
) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_DATA:
        return action.payload;
      case types.SWAP_USER: {
        draft.map(lane => {
          const index = lane.users.findIndex(
            user => user.id === action.payload.user.id
          );
          if (index !== -1) {
            lane.users.splice(index, 1);
          }
        });

        draft
          .find(lane => lane.id === action.payload.toLane.id)!
          .users.push(action.payload.user);
        break;
      }
      case types.ADD_USER: {
        draft
          .find(lane => lane.id === action.payload.toLaneId)!
          .users.push(action.payload.user);
        break;
      }
    }
  });

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
