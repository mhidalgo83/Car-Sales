import React from "react";
import { removeItem } from "../actions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => props.removeItem(props.feature)}>
        X
      </button>
      {props.feature}
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
