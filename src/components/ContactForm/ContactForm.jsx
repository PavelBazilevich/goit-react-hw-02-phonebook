import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  hendleChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  hendleSubmit = event => {
    event.preventDefault();
    let contactArrr = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contactArrr);

    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    return (
      <div>
        <form
          type="submit"
          onSubmit={this.hendleSubmit}
          className={css.contact_box}
        >
          <label>
            <input
              className={css.input}
              placeholder="Name"
              onChange={this.hendleChenge}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.input_phone}>
            <input
              className={css.input}
              placeholder="Number"
              onChange={this.hendleChenge}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button className={css.button_submit} type="submit">
              Add contact
            </button>
          </label>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;
