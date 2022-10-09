import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import Add from "./components/Add";
import Search from "./components/Search";

function App() {
  let Data =  JSON.parse(localStorage.getItem("shoppingList")) ?? []
  let [items, setItems] = useState(Data);
  let [newItem, setNewItem] = useState("");
  let [search, setSearch] = useState("");

  function handleCheck(id) {
    let list = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(list);
  }
  function handleDelete(id) {
    let list = items.filter((item) => {
      return item.id !== id;
    });
    setItems(list);
  }
  function handleClickAdd() {
    let obj = {
      id: items[items.length - 1]?.id + 1 || 1,
      checked: false,
      itemName: newItem,
    };
    let list = [...items, obj];

    setItems(list);
    setNewItem("");
  }
  useEffect(()=>{
    localStorage.setItem("shoppingList",JSON.stringify(items))
  },[items])

  return (
    <div className="App">
      <Header title={"ToDo List"} />
      <Add
        newItem={newItem}
        setNewItem={setNewItem}
        handleClickAdd={handleClickAdd}
      />

      <Search search={search} setSearch={setSearch} />
      { items.length ? (<Content
        items={items.filter((item) =>
          item.itemName.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />): <h2>List is empty</h2> }
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
