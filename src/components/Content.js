
import React from "react";


const Content = ({ items, handleCheck, handleDelete,search }) => {
  return (
    <main>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                onChange={(e) => {
                  handleCheck(item.id,e);
                }}
                checked ={item.checked}
              />
              <label
                style={
                  item.checked
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "underline" }
                }
              >
                {" "}
                {item.itemName}{" "}
              </label>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                {" "}
                delete{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
