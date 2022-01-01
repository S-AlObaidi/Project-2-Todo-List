import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import Todo from './components/Todo';
import Add from './components/Add';
import Register from './components/Register';
import Login from './components/Login';


export default function App() {

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
        refreshPage();
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
    <Todo
      key={taskObj._id}
      task={taskObj}
      delTask={delTodo}
      chng={chngIs} />
  ))

  const refreshPage = () => {
    window.location.reload(false);
  }

  const deleteAll = () => {
    axios
      .delete(`http://localhost:5000/delAll`)
      .then((response) => {
        console.log("DATA: ", response.data);
        getData();
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  const delComp = () => {
    axios
      .delete(`http://localhost:5000/delCompleted`)
      .then((response) => {
        console.log("DATA: ", response.data);
        getData();
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  const getpend = (status) => {
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  }

  return (
    <div className=''>
      <p className='User-info'>{isLoggedIn ? `Hello, ${username}` : ""}</p>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className='Logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/To_Do.svg/2515px-To_Do.svg.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {isLoggedIn ? <li className="nav-item">
                <Link className="nav-link active" to="home">Home</Link>
              </li> : ''}
              {isLoggedIn ? "" : <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>}
              {isLoggedIn ? "" : <li className="nav-item">
                <Link className="nav-link" to="register">Register</Link>
              </li>}
              {isLoggedIn ? <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}><span className='Red'>Logout</span></Link>
              </li> : ''}
            </ul>
          </div>
        </div>
      </nav>
      <div className='Home-1'>
        <Routes>
          <Route path='home' element={<div className='Home'>
            <Add postNewTodo={postNewTodo} delAll={deleteAll} delComp={delComp} getpend={getpend} getData={getData} />
            {mapOverTasks}
          </div>} />
          <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}
            setUsername={setUsername} isLoggedIn={isLoggedIn} />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}
