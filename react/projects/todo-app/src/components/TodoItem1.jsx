import React from 'react'

const TodoItem1 = () => {
    let todoName = 'Buy Milk';
    let todoDate = '10/12/2025';
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

export default TodoItem1