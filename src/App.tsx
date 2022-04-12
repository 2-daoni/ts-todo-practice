import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<Number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === task) {
    setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
    setTask(e.target.value);
  };

  return (
    <div className="App">
      <div className='header'>
        <input type="text" placeholder="투두,,," name='task' onChange={handleChange}></input>
        <input type="number" placeholder="마감일" name='deadline' onChange={handleChange}></input>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
