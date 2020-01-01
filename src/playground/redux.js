import { createStore } from "redux";

//Action - generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

//reducers


const countReducer = ((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
      break;
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
      break;
    case "RESET":
      return {
        count: 0
      };
      break;
      case "SET":
        return {
          count: action.count
        };
        break;
    default:
      return state;
  }
});

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch(decrementCount({ decrementBy: 3}))
store.dispatch(decrementCount())
store.dispatch(resetCount())
store.dispatch(setCount({count: 27}))

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "DECREMENT"
// });
// store.dispatch({
//   type: "DECREMENT"
// });

// // unsubscribe();

// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 8
// });


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher

// console.log(`Publisher name: ${publisherName}`);
