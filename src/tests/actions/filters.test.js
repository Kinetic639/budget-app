import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from "../../actions/Filters";
import moment from "moment";

test("should generate set start date object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});

test("should generate set end date object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});

test("should generate sort by date object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate sort by amount object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate default set text filter object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate default set text filter object", () => {
  const action = setTextFilter("bill");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bill"
  });
});
