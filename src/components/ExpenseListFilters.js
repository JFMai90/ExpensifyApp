
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }} />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value = 'amount') {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters);