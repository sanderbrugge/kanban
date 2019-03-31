import * as React from "react";
import Header from "../../components/Header";
import SwimmingLaneContainer from "../../components/SwimmingLane";
import "./Home.scss";
import { fetchSwimmingLaneData } from "../../api/user.service";
import { SwimmingLane } from "../../api/interfaces";

const Home: React.FC = () => {
  const [data, setData] = React.useState<SwimmingLane[]>();

  React.useEffect(() => {
    // here I'd use an async/await fn to fetch the data and populate the state.
    const data = fetchSwimmingLaneData();

    setData(data);
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

export default Home;
