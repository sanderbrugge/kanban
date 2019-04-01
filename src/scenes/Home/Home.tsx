import * as React from "react";
import Header from "../../components/Header";
import SwimmingLaneContainer from "../../components/SwimmingLane";
import "./Home.scss";
import { SwimmingLane } from "../../api/interfaces";
import { connect } from "react-redux";
import { actions as swimmingLaneActions } from "../../ducks/SwimmingLaneDuck";
import { Store } from "../../ducks";

interface IProps {
  lanes: SwimmingLane[];
  fetchData: () => void;
}

const Home: React.FC<IProps> = ({ fetchData, lanes }) => {
  React.useEffect(() => {
    /*
      fetch the data from the 'api'
      I can fetch them without error handling because I know it'll return the hardcoded list.
      In a real application fetchData() would return a promise that I can async/await on and catch errors with try/catch and handle accordingly
    */
    if (lanes.length === 0) {
      fetchData();
    }
  });

  return (
    <>
      <Header />
      <div className="home_container">
        {lanes &&
          lanes.map(lane => {
            return <SwimmingLaneContainer key={lane.id} data={lane} />
          })}
      </div>
    </>
  );
};

// Using redux in this application is overkill right now. but set for easy expansions.
const mapStateToProps = (state: Store) => ({
  lanes: state.swimmingLanes
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(swimmingLaneActions.fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
