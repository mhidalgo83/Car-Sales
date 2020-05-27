import React from "react";
import { removeItem } from "../actions";
import { useDispatch } from "react-redux";

const AddedFeature = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => dispatch(removeItem(props.feature))}
      >
        X
      </button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
