import { combineReducers } from 'redux';
import swimmingLaneReducer from './SwimmingLaneDuck';
import { SwimmingLane } from '../api/interfaces';

export interface Store {
  swimmingLanes: SwimmingLane[]
}

const rootReducer = combineReducers({
  swimmingLanes: swimmingLaneReducer
});

export default rootReducer;
