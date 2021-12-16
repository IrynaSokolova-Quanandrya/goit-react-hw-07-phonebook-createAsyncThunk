/** @format */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import phonebookActions from "../redux/actions";
import { getVisibleContacts } from "../redux/selectors";
import PropTypes from "prop-types";
import styles from "../styles/button.module.css";
import s from "../styles/contactList.module.css";

export default function ContactList() {
  const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contact__list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={styles.btn}
            onClick={() => dispatch(phonebookActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
