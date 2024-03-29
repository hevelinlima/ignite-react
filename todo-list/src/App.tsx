import './App.module.css'
import { Header } from './components/Header'
import { TaskBar } from './components/TaskBar'
import { Tasks } from './components/Tasks'

export function App() {

  return (
    <div>
      <Header />
      <TaskBar />
      <Tasks/>
    </div>
  )
}


