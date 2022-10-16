import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid/non-secure';
import css from 'components/ContactList/ContactList.module.css';

class ContactList extends Component {
  deleteId = Id => {
    this.props.deleted(Id);
  };

  createMarcup = () => {
    return this.props.contacts.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          <span
            className={css.item_content}
          >{`${contact.name}: ${contact.number}`}</span>
          <button
            className={css.deleted_button}
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };
  render() {
    return <ul>{this.createMarcup()}</ul>;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleted: PropTypes.func.isRequired,
};
export default ContactList;
