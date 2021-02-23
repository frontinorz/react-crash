import { useState } from 'react'

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header
        title="Task tracker"
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {
        showAddTask && <AddTask onAdd={addTask} />
      }
      {
        tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />)
          : (
            'No tasks to show')
      }
    </div>
  );
}

export default App;
