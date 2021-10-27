import React, { useState } from 'react';
import "./App.css"

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App() {
  const [newTask, setNewtask] = useState<string>("")
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleSumbit = (e: FormElement) => {
    e.preventDefault()
    addTask(newTask);
    console.log(tasks)

  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }]
    setTasks(newTasks);
    setNewtask("")
  }

  const toggleDoneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  const removeTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1)
    setTasks(newTasks)

  }
  return (
    <>
      <div className="container" >
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card text-white bg-primary shadow p-3 mb-2  " >
              <div className="card-header">Lista de Tareas</div>
              <div className="card-body d-flex justify-content-around">
                <form className='d-flex row justify-content-center ' onSubmit={handleSumbit}>
                  <input type="text" onChange={e => setNewtask(e.target.value)} value={newTask}
                    autoFocus />
                  <button className="btn btn-info mt-3 w-50  ">
                    Save
                  </button>
                </form>

              </div>
            </div>

            {
              tasks.map((t: ITask, i: number) => (
                <div className="card card-body mt-2" key={i}>
                  <h2 style={{ textDecoration: t.done ? 'line-through' : "" }}>Tarea {i + 1}: {t.name}</h2>
                  <p>{t.done}</p>
                  <div>
                    <button className="btn btn-info" onClick={() => toggleDoneTask(i)}>
                      {t.done ? '✗' : '🗸'}
                    </button>
                    <button className="btn  btn-warning ms-3" onClick={() => removeTask(i)}>
                      🗑
                    </button>
                  </div>
                </div>
              )
              )}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
