import { useState, useEffect } from 'react'
// import { db, collection, getDocs, addDoc } from './firebase'
import Layout from "./components/layout/Layout";
import Todos from './components/app/Todos'
import AddTodo from './components/app/AddTodo';
import Footer from './components/layout/Footer'

const tempTodos = [
  { id: "5326931883580409", todo: "feed the dog", isCompleted: false },
  { id: "7296572133983615", todo: "cook breakfast", isCompleted: false },
  { id: "4821274738313757", todo: "learn a new language", isCompleted: false },
  { id: "5113042383785769", todo: "walk the dog", isCompleted: false },
];

function App() {
  // const colRef = collection(db, "todos");
  const [todos, setTodos] = useState(tempTodos);

   /* const addTodo = async (todo) => await addDoc(colRef, todo)

  useEffect(() => {
    const getTodos = async () => {
      const dbTodos = await getDocs(colRef)
      setTodos(dbTodos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getTodos()
  }, []);*/

  const addTodo = todo => {
    todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    setTodos([...todos, todo])
  }

  const editTodo = todo => {
    if (!todo.isCompleted) {
      console.log('do something if this todo in not completed')
    } else {
      console.log('show a popup notification if the todo item is marked as completed')
    }
  }

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos);
  }

  const deleteTodos = () => {
    let emptyList = todos
    emptyList = []
    setTodos(emptyList)
  }

  const toggleComplete = id => {
    const toggledTodos = todos.filter(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
        return todo
      }
      return todo
    })
    setTodos(toggledTodos)
  }

  console.log(todos)

  return (
    <Layout>
      <AddTodo onAddTodo={addTodo} />
      <Todos
        items={todos}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
      />
      <Footer items={todos} onDeleteTodos={deleteTodos} />
    </Layout>
  );
}

export default App;
