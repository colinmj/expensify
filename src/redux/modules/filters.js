const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SET_START_DATE = 'SET_START_DATE';
const SET_END_DATE = 'SET_END_DATE';

export const setTextFilter = text => ({
  type: SET_TEXT_FILTER,
  text
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const setStartDate = (date = undefined) => ({
  type: SET_START_DATE,
  date
});

export const setEndDate = date => ({
  type: SET_END_DATE,
  date
});
