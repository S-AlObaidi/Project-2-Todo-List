import React, { useState } from 'react'
import axios from 'axios'
import Delete from './Delete'

export default function Add(props) {

    const [newTitle, setNewTitle] = useState([]);

    const createTodo = () => {
        props.postNewTodo({
            "title": newTitle,
            "isCompleted": false
        })
    }

    const deleteAll = () => {
        props.delAll();
    }

    const delcomp = () => {
        props.delComp();
    }

    const getfinish = () => {
        props.getpend(true);
    }

    const getpend = () => {
        props.getpend(false);
    }

    return (
        <div className='Add'>
            <input type="text" placeholder='Write new task 🖊' onChange={(e) => { setNewTitle(e.target.value) }} />
            <button type='submit' className='Add-btn' onClick={createTodo}>Create new task ✅</button>
            <Delete deleteAll={deleteAll} delcomp={delcomp} getfinsh={getfinish} getpend={getpend} />
        </div>
    )
}
