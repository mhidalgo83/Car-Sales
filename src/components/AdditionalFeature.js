import React from "react";
import { addFeatureCost, addFeatureItem } from "../actions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          props.addFeatureItem(props.feature.name);
          props.addFeatureCost(props.feature.price);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeatureCost, addFeatureItem })(
  AdditionalFeature
);
