import React from 'react'

export default function Todo(props) {
    const { _id, title, isCompleted } = props.task
    const delTask = () => {
        props.delTask(_id);
    }
    const chngSta = () => {
        props.chng(_id, isCompleted);
    }
    return (
        <div className='Todo'>
            <ul className="list-group">
                <li className="list-group-item list-group-item-action list-group-item-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col text-start">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id={_id} defaultChecked={isCompleted} onClick={chngSta} />
                                </div>
                            </div>
                            <div className="col-6 text-start">
                                <label className="form-check-label" htmlFor={_id} style={{ textDecoration: isCompleted ? "line-through" : "none" }}>{title}</label>
                            </div>
                            <div className="col text-end">
                                <button onClick={delTask} className='btn btn-outline-danger'><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}