import React, { useState } from 'react'

export default function Delete(props) {

    const delAl = () => {
        props.deleteAll();
    }

    const delComp = () => {
        props.delcomp();
    }

    const getfnsh = () => {
        props.getfinsh();
    }


    const getpnd = () => {
        props.getpend();
    }

    const getData = () => {
        props.getData();
    }

    return (
        <div className='Delete'>
            <button onClick={getData} className='btn btn-primary m-2'>GET ALL TASKS</button>
            <button onClick={delAl} className='btn btn-danger m-2'>DELETE ALL TASKS</button>
            <button onClick={getfnsh} className='btn btn-info m-2'>GET FINSHED TASKS</button>
            <button onClick={getpnd} className='btn btn-warning m-2'>GET PENDING TASKS</button>
            <button onClick={delComp} className='btn btn-secondary m-2'>DELETE COMPLETED TASKS</button>
        </div>
    )
}
