import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import axios from "axios";

axios.defaults.baseURL = "https://61b8cec938f69a0017ce5d78.mockapi.io/";

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
      completed: false,
    };
    console.log(contact);
    dispatch({ type: "contacts/addContactRequest" });

    axios
      .post("contacts", contact, console.log(contact))
      .then(({ data }) =>
        dispatch({ type: "contacts/addContactSuccess", payload: data })
      )
      .catch((error) =>
        dispatch({ type: "contacts/addContactsError", payload: error })
      );
  };
// const addContact = createAction("contacts/add", (contact) => ({
//   payload: {
//     contact: {
//       id: nanoid(),
//       ...contact,
//     },
//   },
// }));

const deleteContact = createAction("contact/Delete");

const changeFilter = createAction("contact/changeFilter");

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};
export default phonebookActions;
