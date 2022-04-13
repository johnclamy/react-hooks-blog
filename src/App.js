import { Routes, Route } from 'react-router-dom'
import Navbar from './modules/layout/Navbar'
import LandingPage from './modules/pages/Landing'
import HomePage from './modules/pages/Home'
import SignupPage from './modules/pages/Signup'
import SigninPage from './modules/pages/Signin'
import AccountPage from './modules/pages/Account'
import AddTodoPage from './modules/pages/AddTodo'
import EditTodoPage from './modules/pages/EditTodo'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/add-todo" element={<AddTodoPage />} />
        <Route path="/edit-todo" element={<EditTodoPage />} />
      </Routes>
    </>
  );
}

export default App;
