import React, { useState } from 'react';

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
  return (
    <>
      <div className="container p-4">
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
                  <h2>{t.name}</h2>
                  <p>{t.done} </p>
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
