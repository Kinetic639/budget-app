import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should generate set text filter action object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate set text filter action object with given value", () => {
  const action = setTextFilter("testing");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "testing"
  });
});

test("should generate set sort by date action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate set sort by amount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
