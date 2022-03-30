import { useState } from "react";

export const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleKeyPress = (event) => {
      if(event.key === "Enter") {
        handleSubmit(event)
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput)
    setUserInput("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button>Сохранить</button>
    </form>
  );
};
