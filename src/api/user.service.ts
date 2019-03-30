import data from './data.json';
import { SwimmingLane } from "./interfaces";

// A bit of overkill structurally, but this is how I go about implementing the API layer, but then returning promises.
export function fetchSwimmingLaneData(): SwimmingLane[] {
  return data;
}
