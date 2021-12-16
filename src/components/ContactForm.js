/** @format */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import phonebookActions from "../redux/actions";
import s from "../styles/form.module.css";
import styles from "../styles/input.module.css";
import style from "../styles/button.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  console.log(name);
  const [number, setNumber] = useState("");
  console.log(number);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(phonebookActions.addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
}
