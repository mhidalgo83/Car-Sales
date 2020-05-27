import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { useSelector } from "react-redux";

const App = (props) => {
  const { car, additionalFeatures, additionalPrice } = useSelector(
    (state) => state
  );
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice,
//   };
// };

// export default connect(mapStateToProps, {})(App);

export default App;
