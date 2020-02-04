import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setTo = 0 } = {}) => ({
  type: "SET",
  setTo
});
const resetCount = () => ( {
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy
        };
      case "SET":
        return {
          count: action.setTo
        };
      case "RESET":
        return {
          count: 0
        };
  
      default:
        return state;
    }
  }

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//increment
store.dispatch(incrementCount({ incrementBy: 12 }));

store.dispatch(decrementCount({ decrementBy: 22 }));
store.dispatch(setCount({ setTo: 26 }));
store.dispatch(resetCount());
// store.dispatch({
//   type: "RESET"
// });
