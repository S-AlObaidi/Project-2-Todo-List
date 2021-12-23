import React from 'react'

export default function Todo(props) {
    return (
        <div className='Todo'>
            <p className='id'>ID: {props._id}</p>
            <p className='title'>Title: {props.title}</p>
            <p className='status'>Status: {props.isCompleted} </p>
        </div>
    )
}
