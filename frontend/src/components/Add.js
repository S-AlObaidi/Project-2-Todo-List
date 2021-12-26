import React, { useState } from 'react'
import axios from 'axios'

export default function Add(props) {

    const [newTitle, setNewTitle] = useState([]);

    const createTodo = () => {
        props.postNewTodo({
            "title": newTitle,
            "isCompleted": false
        })
    }

    return (
        <div className='Add'>
            <input type="text" placeholder='Write new task 🖊' onChange={(e) => { setNewTitle(e.target.value) }} />
            <button onClick={createTodo}>Create new task ✅</button>
        </div>
    )
}
