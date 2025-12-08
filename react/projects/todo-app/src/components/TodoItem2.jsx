import React from 'react'

const TodoItem2 = () => {
    let todoName = 'Go to college';
    let todoDate = '13/12/2025';
    return (
        <>
            <div className="container">
                <div className="row todo-row">
                    <div className="col-6">
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" class="btn btn-danger todo-btn">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem2