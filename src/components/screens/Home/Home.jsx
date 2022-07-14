import React, { useState } from 'react'
import TodoItem from '../../Item/TodoItem'
import generateRandomString from '../../../generateRandomString.js'
import CreateTodoField from '../Home/CreateTodoField/CreateTodoField'

const data = [
  {
    _id: `${generateRandomString()}`,
    title: 'Finish the essay collabooration',
    isComplited: false
  },
  {
    _id: `${generateRandomString()}`,
    title: 'Read next chapter of the book',
    isComplited: false
  },
  {
    _id: `${generateRandomString()}`,
    title: 'Send the finished assignment',
    isComplited: false
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }

  const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo for User</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home