import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contacts/add", (contact) => ({
  payload: {
    contact: {
      id: nanoid(),
      ...contact,
    },
  },
}));

const deleteContact = createAction("contact/Delete");

const changeFilter = createAction("contact/changeFilter");

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};
export default phonebookActions;
