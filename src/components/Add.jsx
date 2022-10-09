import React from "react";

const Add = ({ newItem, setNewItem, handleClickAdd }) => {
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Add Items Here"
        value={newItem}
        onChange={({ target }) => {
          setNewItem(target.value);
        }}
      />
      <button onClick={handleClickAdd} >+</button>
    </div>
  );
};

export default Add;
