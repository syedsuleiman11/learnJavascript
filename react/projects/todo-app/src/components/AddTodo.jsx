import React from 'react'

const AddTodo = () => {
    return (
        <>
            <div className="container">

                <div className="row todo-row">
                    <div className="col-6">
                        <input type="text" placeholder='Enter TODO Here' />
                    </div>
                    <div className="col-4">
                        <input type="date" />
                    </div>
                    <div className="col-2">
                        <button type="button" class="btn btn-success todo-btn">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo