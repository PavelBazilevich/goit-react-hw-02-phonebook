import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

class Filter extends Component {
  setValue = event => {
    const value = event.currentTarget.value.toUpperCase();
    this.props.setFilter(value);
  };
  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          className={css.input}
          placeholder="who are you looking for?"
          onChange={this.setValue}
        ></input>
      </div>
    );
  }
}
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
