import React from "react";
import { addItem } from "../actions";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          // props.addItem(props.feature.name, props.feature.price);
          dispatch(addItem(props.feature.name, props.feature.price));
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default connect(null, { addItem })(AdditionalFeature);
export default AdditionalFeature;
