import { actions } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log("muda title");
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};
