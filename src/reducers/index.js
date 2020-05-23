import { ADD_FEATURE_COST, ADD_FEATURE_ITEM } from "../actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE_COST:
      console.log("Payload", action.payload);
      console.log(state.additionalPrice);
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload,
      };
    case ADD_FEATURE_ITEM:
      console.log("Payload item: ", action.payload);
      return {...state,
        car: { ...state.car, features: [...state.car.features, action.payload] },
      };
    default:
      return state;
  }
};
