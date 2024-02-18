import React, { useState } from "react";
import "../App.css";

const TodoList = ({ list, setList, setForm, settoggleEdit, setEditIndex }) => {

  function deleteList(indToRemove) {
    const updatedList = list.filter((item, index) => index !== indToRemove);
    setList(updatedList);
  }

  function editList(indexToEdit) {
    settoggleEdit(true);
  
    const selectedItem = list[indexToEdit];
    setForm({
      heading: selectedItem.heading,
      description: selectedItem.description,
    });
  
    setEditIndex(indexToEdit);
  }

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="table-header">
            <th className="table-cell">Heading</th>
            <th className="table-cell">Description</th>
            <th className="table-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td className="table-cell">{item.heading}</td>
              <td className="table-cell">{item.description}</td>
              <td className="table-cell">
                <button className="edit button" onClick={() => editList(index)}>
                  Edit
                </button>
                <button className="delete button" onClick={() => deleteList(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
