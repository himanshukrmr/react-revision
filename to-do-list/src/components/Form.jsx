import React, { useState } from "react";
import TodoList from "./TodoList";
import "../App.css";

function Form() {
  const [form, setForm] = useState({
    heading: "",
    description: "",
  });

  const [list, setList] = useState([]);
  const [toggleEdit, settoggleEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // New state to track the index being edited  

  function setFormData(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function setListData(e) {
    e.preventDefault();

    if (toggleEdit) {
      // If in edit mode, update the existing item
      const updatedList = [...list];
      updatedList[editIndex] = form;
      setList(updatedList);
      setEditIndex(null);
      settoggleEdit(false);
    } else {
      // If not in edit mode, add a new item
      setList([...list, form]);
    }

    // Clear the form fields
    setForm({
      heading: "",
      description: "",
    });
  }

  function clearEdit() {
    // Clear the form fields and reset editIndex
    setForm({
      heading: "",
      description: "",
    });
    setEditIndex(null);
    settoggleEdit(false);
  }

  return (
    <>
      <form onSubmit={setListData}>
        <input
          type="text"
          id="heading"
          placeholder="heading"
          onChange={(e) => setFormData(e)}
          name="heading"
          value={form.heading}
        ></input>

        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={(e) => setFormData(e)}
          name="description"
          value={form.description}
        ></input>

        <button type="submit">{toggleEdit ? "Save" : "Add"}</button>
        {toggleEdit && (
          <button type="button" onClick={clearEdit}>
            Cancel
          </button>
        )}
      </form>
      {list.length>0 ? <TodoList
        list={list}
        setList={setList}
        setForm={setForm}
        settoggleEdit={settoggleEdit}
        setEditIndex={setEditIndex} // Pass the function to setEditIndex to TodoList
      /> : <p id="on-load-heading">Add your Todos</p>
    }
      
    </>
  );
}

export default Form;
