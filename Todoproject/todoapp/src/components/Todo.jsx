import React, { useState } from 'react'
import TodoCss from "./todo.module.css"
import toast from 'react-hot-toast'

const Todo = () => {

    const data = [
        { task: "Buy Car", complete: true },
        { task: "Buy Bike", complete: true }
    ]

    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState(data)

    function handleForm(e) {
        e.preventDefault()


        if (!input) {
            toast.error("Please add task ..")
        } else {
            let isVerify = tasks.some((value, index) => {
                return value.task.toLowerCase() === input.toLowerCase()
            })
            if (isVerify) {
                toast.error("Task already added..")
                setInput("")
            } else {
                setTasks([...tasks, { task: input, complete: false }])
                setInput("")
            }
        }

    }

    function handleDelete(id) {
        let copyOfTasks = [...tasks]
        const deleteTasks = copyOfTasks.filter((value, index) => {
            return index !== id
        })
        setTasks(deleteTasks)

    }

    function handleUpdate(id){
        let copyOfTasks = [...tasks]
        const oldTask = copyOfTasks[id].task
        const newTask = prompt(`Update Task :- ${oldTask}` , oldTask)
        let newObj = {task:newTask,complete:false}
        copyOfTasks.splice(id,1,newObj)
        setTasks(copyOfTasks)
    }

    return (
        <div className={TodoCss.todo_container}>

            <div>
                <h1 className='text-center'>Todo Application🧾</h1>
                <div className={TodoCss.task_summary}>
                    <div>✅ Completed: 2 </div>
                    <div>📌 Remaining: 2 </div>
                </div>

                <form action="" className={TodoCss.input_section} onSubmit={handleForm}>
                    <input type="text" name="" id=""
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                    />
                    <button type='submit'>Add Task</button>
                </form>
                <ul className={TodoCss.task_list}>
                    {
                        tasks.map((value, index) => (
                            <li>
                                <span className='fw-bold fs-4'>{value.task}</span>
                                <div>
                                    <i class="bi bi-trash text-danger fs-4 float-end btn" onClick={() => { handleDelete(index) }}></i>
                                    <i class="bi bi-pencil-fill text-success fs-4 me-3 float-end btn" onClick={()=>{handleUpdate(index)}}></i>
                                </div>

                            </li>
                        ))
                    }

                </ul>
            </div>

        </div>
    )
}

export default Todo
