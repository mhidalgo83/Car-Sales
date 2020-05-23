export const ADD_FEATURE_COST = "ADD_FEATURE_COST";
export const ADD_FEATURE_ITEM = "ADD_FEATURE_ITEM";

export const addFeatureCost = (cost) => {
  return {
    type: ADD_FEATURE_COST,
    payload: cost,
  };
};

export const addFeatureItem = (item) => {
  return {
    type: ADD_FEATURE_ITEM,
    payload: item,
  };
};
