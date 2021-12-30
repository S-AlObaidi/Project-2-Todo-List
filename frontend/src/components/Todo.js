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
        <div className='App'>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className='form-check form-switch'>
                            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={isCompleted} onClick={chngSta} />
                        </div>
                    </div>
                    <div class="col">
                        <div className='Todo'>
                            <label for="flexSwitchCheckDefault" style={{ textDecoration: isCompleted ? "line-through" : "none" }}> {title}</label>
                        </div>
                    </div>
                    <div class="col">
                        <button onClick={delTask} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



{/* <div className='form-check form-switch'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={isCompleted} onClick={chngSta} />
            <table class="table table-dark table-striped" for="flexSwitchCheckDefault" style={{ textDecoration: isCompleted ? "line-through" : "none" }}> {title}</table>
            <button onClick={delTask} className='btn btn-danger'>Delete</button>
        </div> */}