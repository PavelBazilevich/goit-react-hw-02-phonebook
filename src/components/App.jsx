import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from 'components/App.module.css';

import { nanoid } from 'nanoid/non-secure';
// nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ"

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

  // onSubmitData = () => {};
  repeatControlData = data => {
    let nameArray = [];
    nameArray = this.state.contacts.map(current => current.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Контакт вже є у телефонній книзі!');
    }
  };

  setFilter = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterArr = Arr => {
    let newArr = Arr.filter(current =>
      current.name.toUpperCase().includes(this.state.filter)
    );
    return newArr;
  };

  deleteElement = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = idContact => {
    let newArrAfterDel = this.deleteElement(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  render() {
    return (
      <div className={css.form_box}>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.repeatControlData} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactList
          contacts={this.filterArr(this.state.contacts)}
          deleted={this.deleteContactFromContactList}
        />
      </div>
    );
  }
}
export default App;
