import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

function App() {
  const [newTask, setNewtask] = useState<string>("")
  const [tasks, setTasks] = useState([])

  const handleSumbit = (e: FormElement) => {
    e.preventDefault()
    console.log(newTask)
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type="text" onChange={e => setNewtask(e.target.value)} />
        <button>
          Save
        </button>
      </form>
    </>
  );
}

export default App;
