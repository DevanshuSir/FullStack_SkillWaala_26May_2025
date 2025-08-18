import React, { useEffect, useRef, useState } from "react";
import TodoCss from "./todo.module.css";
import toast from "react-hot-toast";

const Todo = () => {
  const data = JSON.parse(localStorage.getItem("todo")) || [
    { task: "Buy Car", complete: true },
    { task: "Buy Bike", complete: false },
  ];

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(data);
  const [Ctask, setCtask] = useState(0);
  const [Rtask, setRtask] = useState(0);
  const darkElement = useRef()
  const darkIconElement = useRef()

  function handleForm(e) {
    e.preventDefault();

    if (!input) {
      toast.error("Please add task ..");
    } else {
      let isVerify = tasks.some((value, index) => {
        return value.task.toLowerCase() === input.toLowerCase();
      });
      if (isVerify) {
        toast.error("Task already added..");
        setInput("");
      } else {
        setTasks([...tasks, { task: input, complete: false }]);
        setInput("");
      }
    }
  }

  function handleDelete(id) {
    let copyOfTasks = [...tasks];
    const deleteTasks = copyOfTasks.filter((value, index) => {
      return index !== id;
    });
    setTasks(deleteTasks);
  }

  function handleUpdate(id) {
    let copyOfTasks = [...tasks];
    const oldTask = copyOfTasks[id].task;
    const newTask = prompt(`Update Task :- ${oldTask}`, oldTask);
    let newObj = { task: newTask, complete: false };
    copyOfTasks.splice(id, 1, newObj);
    setTasks(copyOfTasks);
  }

  function handleCheck(id) {
    const copyOfTasks = [...tasks];
    copyOfTasks[id].complete = !copyOfTasks[id].complete;
    console.log(copyOfTasks);
    setTasks(copyOfTasks);
  }

  useEffect(() => {
    let copyOfTasks = [...tasks];
    const completedTasks = copyOfTasks.filter((value, index) => {
      return value.complete;
    });
    setCtask(completedTasks.length);

    const remainigTasks = copyOfTasks.filter((value, index) => {
      return !value.complete;
    });

    setRtask(remainigTasks.length);

    localStorage.setItem("todo",JSON.stringify(copyOfTasks))

  }, [tasks]);


  function handleDarkMode(){
       const bgColor =  darkElement.current.style.backgroundColor
       if(bgColor==""|| bgColor=="white"){
            darkElement.current.style.backgroundColor = "black"
             darkElement.current.style.color = "white"
             darkIconElement.current.className = "bi bi-toggle-on text-success fs-4 "
       }else{
        darkElement.current.style.backgroundColor = "white"
         darkElement.current.style.color = "black"
         darkIconElement.current.className = "bi bi-toggle-off text-danger fs-4 "
       }
  }

  return (
    <div className={TodoCss.todo_container} ref={darkElement}>
      <div>
        <h1 className="text-center">Todo Application
       
        </h1>

            <div className="text-center">
                <i className="bi bi-toggle-on text-success fs-4"
            ref={darkIconElement}
            onClick={handleDarkMode} ></i>
                </div> 
        
        <div className={TodoCss.task_summary}>
          <div>✅ Completed: {Ctask} </div>
          <div>📌 Remaining: {Rtask} </div>
        </div>

        <form action="" className={TodoCss.input_section} onSubmit={handleForm}>
          <input
            type="text"
            name=""
            id=""
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit">Add Task</button>
        </form>
        <ul className={TodoCss.task_list}>
          {tasks.map((value, index) => (
            <li>
              <input
                type="checkbox"
                name=""
                id=""
                className={TodoCss.checkbox}
                checked={value.complete}
                onClick={() => {
                  handleCheck(index);
                }}
              />
              <span
                style={{
                  textDecoration: value.complete ? "line-through red" : "",
                }}
                className="fw-bold fs-4"
              >
                {value.task}
              </span>
              <div>
                <i
                  className="bi bi-trash text-danger fs-4 float-end btn"
                  onClick={() => {
                    handleDelete(index);
                  }}
                ></i>
                <i
                  className="bi bi-pencil-fill text-success fs-4 me-3 float-end btn"
                  onClick={() => {
                    handleUpdate(index);
                  }}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
