import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from './components/Footer';
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const apiUrl = 'http://localhost:5000/tasks'

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  // Get all tasks
  const fetchTasks = async () => {
    const res = await fetch(apiUrl)
    const data = await res.json()

    return data
  }

  // Get single task
  const fetchTask = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`)
    const data = await res.json()

    return data
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter(task => task.id != id))
  }

  // Add task
  const addTask = async (task) => {
    //*-- json server --*
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
    //*-- local data --*
    // const id = Math.floor(Math.random() * 1000 + 1)
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Change task reminder status
  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updTask = {
      ...task,
      reminder: !task.reminder
    }

    const res = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(tasks.map(task =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    ))
  }

  return (
    <Router>
      <div className="container">
        <Header
          title="Task tracker"
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />

        <Route path='/' exact render={(props) => (
          <>
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
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
