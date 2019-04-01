import * as React from "react";
import Header from "../../components/Header";
import SwimmingLaneContainer from "../../components/SwimmingLane";
import "./Home.scss";
import { SwimmingLane } from "../../api/interfaces";
import { connect } from "react-redux";
import { actions as swimmingLaneActions } from '../../ducks/SwimmingLaneDuck';
import { Store } from "../../ducks";


interface IProps {
  lanes: SwimmingLane[];
  fetchData: () => void;
}

const Home: React.FC<IProps> = ({ fetchData, lanes }) => {
  const [data, setData] = React.useState<SwimmingLane[]>();

  React.useEffect(() => {
    fetchData();
    setData(lanes);
  });

  return (
    <>
      <Header />
      <div className="home_container">
        {data &&
          data.map(lane => <SwimmingLaneContainer key={lane.id} data={lane} />)}
      </div>
    </>
  );
};

const mapStateToProps = (state: Store) => ({
  lanes: state.swimmingLanes
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(swimmingLaneActions.fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
