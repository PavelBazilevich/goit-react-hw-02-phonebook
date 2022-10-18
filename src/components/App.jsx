import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from 'components/App.module.css';
import { nanoid } from 'nanoid/non-secure';
// дебаг
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  setFilter = filterData => {
    // this.setState({ ...this.state, filter: filterData });
    this.setState({ filter: filterData });
  };

  repeatControlData = data => {
    const nameArray = this.state.contacts.map(current =>
      current.name.toLowerCase()
    );

    if (nameArray.includes(data.name.toLowerCase())) {
      alert(' Контакт вже є у телефонній книзі!');
      return;
    }

    const newContact = { id: nanoid(), ...data };

    return this.setState(prev => {
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  filterArr = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter(current =>
      current.name.toUpperCase().includes(normalizedFilter)
    );
  };

  deleteElement = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    const filteredContacts = this.filterArr();
    return (
      <div className={css.form_box}>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.repeatControlData} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleted={this.deleteContactFromContactList}
        />
      </div>
    );
  }
}
export default App;
