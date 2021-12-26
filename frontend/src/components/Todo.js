import React from 'react'

export default function Todo(props) {
    const { _id, title, isCompleted } = props.task
    const delTask=()=>{
        props.delTask(_id);
    }
    return (
        <div className='Todo'>
            <input type="checkbox" defaultChecked={isCompleted} />
            <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}> {title}</span>
            <button onClick={delTask} className='del-btn'>❌</button>
        </div>
    )
}
