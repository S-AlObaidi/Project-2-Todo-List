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
            <button onClick={delAl} className='del-all-btn'>Delete ALL tasks</button>
            <button onClick={delComp} className='del-all-btn'>Delete Completed tasks</button>
            <button onClick={getfnsh} className='get-comp'>GET Finshed</button>
            <button onClick={getpnd} className='get-pend'>GET Pending</button>
        </div>
    )
}
