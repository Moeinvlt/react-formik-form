import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './components/loginForm'
import { ToastContainer } from 'react-toastify';
import RegisterForm from './components/registerForm';
import Content from './layout/content';

function App() {

  return (
    <>
      <Content />
      <ToastContainer bodyClassName="font_samim" />
    </>
  )
}

export default App
