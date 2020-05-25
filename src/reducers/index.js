import { ADD_ITEM, REMOVE_ITEM } from "../actions";

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
    case ADD_ITEM:
      if (state.car.features.indexOf(action.payload.item) === -1) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.payload.cost,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload.item],
          },
        };
      }
      return { ...state };
    case REMOVE_ITEM:
      let featurePrice;
      state.additionalFeatures.map((feature) => {
        if (action.payload === feature.name) {
          featurePrice = feature.price;
        }
        return feature;
      });
      const newArr = state.car.features.filter(
        (feature) => action.payload !== feature
      );
      return {
        ...state,
        additionalPrice: state.additionalPrice - featurePrice,
        car: { ...state.car, features: newArr },
      };

    default:
      return state;
  }
};
