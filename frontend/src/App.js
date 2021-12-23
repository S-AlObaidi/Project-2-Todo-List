import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Todo from './components/Todo';



function App() {

  const [tasks, setTasks] = useState([]);

  const getData = () => {
    axios
      .get('http://localhost:5000/all')
      .then((response) => {
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">

      <button className='btn_1' onClick={getData}>GET TASKS</button>

      {tasks.map((task, i) => (
        <Todo key={i} _id={task._id} title={task.title} isCompleted={task.isCompleted === true ? "Completed" : "unCompleted"} />
      ))}


    </div>
  );
}

export default App;
