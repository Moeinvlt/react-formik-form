import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './components/loginForm'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <LoginForm/>
      <ToastContainer bodyClassName="font_samim" />
    </>
  )
}

export default App
