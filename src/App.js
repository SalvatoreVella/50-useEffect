import React, { useState } from "react";
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import TodoList from "./TodoList";
import Welcome from "./Welcome";
import Sum from "./Sum";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import GithubUser from "./GithubUser";

function App() {
  const [language, handleLanguage] = useState("en")

    const handleContext = (event) => {
   handleLanguage(() => event.target.value)
}

  return (
    <div>
      <Welcome
        name="Salvatore"
        age={29} />
      <select value={language} onChange={handleContext}>
        <option value={"en"}>EN</option>
        <option value={"it"}>IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <TodoList render={(items, handleDeleteTodo) => {
          console.log(items);
          return (
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.key}>{item.description} <span>{item.done ? "Completato" : ""}</span> <button id={item.key} onClick={handleDeleteTodo}>Delete Todo</button></li>
                )
              })}
            </ul>)
        }}/>
      </LanguageContext.Provider>
      <Container />
      <Sum numbers={[2, 3, 5, 1, 6]}/>
      <ClickCounter />
      <Counter 
      initialValue={10}
      increment={2}
      interval={1500}
      />
      <GithubUser name={"SalvatoreVella"} />
    </div>

  );
}

export default App;
