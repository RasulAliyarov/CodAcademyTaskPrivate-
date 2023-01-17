import { useFormik, FormikProps } from 'formik';
import React, { useRef } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import "./ToDo.scss"
import { writeTodo, completedTodo, deleteTodo, clearCompleted } from "../redux/Slices/todoSlice"
import { v4 as uuidv4 } from 'uuid'



function ToDo() {

    const todoRedux = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch<AppDispatch>()

    let line = ""

    function changeHandler(e: string) {
        line = e
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        dispatch(writeTodo({
            id: uuidv4(),
            value: line
        }))
    }

    function completedHandler(id: string) {
        dispatch(completedTodo(id))
    }
    function deleteTodoHandler(id: string) {
        dispatch(deleteTodo(id))
    }
    function ClearCompletedHandler() {
        dispatch(clearCompleted("salam"))
        // console.log("salam")
    }
    console.log(todoRedux.todos)
    console.log(todoRedux.completed, "comp")
    return (
        <div className='app'>
            <div className="app__top">
                <h1>todos</h1>
            </div>
            <div className="app__wrapper">
                <div className='bg_square'></div>
                <div className='bg_square'></div>

                <div className="app__wrapper__content">
                    <form onSubmit={handleSubmit} className="app__wrapper__content__input">
                        <input type="text" onChange={(e) => changeHandler(e.target.value)} placeholder='What needs to be done?' />
                    </form>

                    <ul className="app__wrapper__content__todo">
                        {
                            (todoRedux.todos).map(todo => {
                                return (
                                    <li key={todo.id} >
                                        <div onClick={() => completedHandler(todo.id)}>
                                            <span className={`${todoRedux.completed.find(value => value === todo.id) ? 'galocka' : ""}`}>✔</span>
                                        </div> <span className={`${todoRedux.completed.find(value => value === todo.id) ? 'overlineLi' : ""}`}>
                                            {todo.value}
                                        </span> <button className='delete' onClick={() => deleteTodoHandler(todo.id)}> ⨉ </button></li>
                                )
                            })
                        }
                    </ul>

                    <div className="app__wrapper__content__settings">
                        <span>{todoRedux.todos.length} items left</span>
                        <div className='buttons'>
                            <button className='active_btn'>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>
                        <button onClick={(e) => ClearCompletedHandler()}>Clear Completed</button>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default ToDo