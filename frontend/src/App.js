import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Todo from './components/Todo';
import Add from './components/Add';



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

  const postNewTodo = (body) => {
    axios
      .post('http://localhost:5000/add', body)
      .then((response) => {
        console.log("DATA: ", response.data);
        getData();
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  const delTodo = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((response) => {
        console.log("DATA: ", response.data);
        getData();
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  const chngIs = (id, isCompleted) => {
    axios
      .put(`http://localhost:5000/editTask/${id}/${!isCompleted}`)
      .then((response) => {
        console.log("DATA: ", response.data);
        getData();
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }


  useEffect(() => {
    getData();
  }, [])

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo key={i} task={taskObj} delTask={delTodo} chng={chngIs} />
  ))

  return (
    <div className='Main'>
      <p>To Do List 🎈</p>
      <div className="App">

        {/* <button className='btn_1' onClick={getData}>GET TASKS</button> */}

        <Add postNewTodo={postNewTodo} />
        {mapOverTasks}


      </div>
    </div>
  );
}

export default App;
