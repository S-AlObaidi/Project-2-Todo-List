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

    const getData = () => {
        props.getData();
    }


    return (
        <div>
            <Delete deleteAll={deleteAll} delcomp={delcomp} getfinsh={getfinish} getpend={getpend} getData={getData} />
            <input className='form-control' type="text" placeholder='Write new task 🖊' onChange={(e) => { setNewTitle(e.target.value) }} />
            <button type='submit' className='btn btn-success m-2' onClick={createTodo}>CREATE NEW TASK</button>
        </div>
    )
}
