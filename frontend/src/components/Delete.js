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

    return (
        <div className='Delete'>
            <button onClick={delAl} className='btn btn-danger'>Delete ALL tasks</button>
            <button onClick={getfnsh} className='btn btn-info'>GET Finshed</button>
            <button onClick={getpnd} className='btn btn-warning'>GET Pending</button>
            <button onClick={delComp} className='btn btn-secondary'>Delete Completed tasks</button>
        </div>
    )
}
