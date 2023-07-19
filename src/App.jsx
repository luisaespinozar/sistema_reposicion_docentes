import './App.css'
import Login from './components/login/login.jsx'
import GoogleAuth from './components/googleAuth/auth.jsx'
function App() {

  return (
    <>
      <Login />
      <div className='w-full flex items-center justify-center pt-3'>
        <GoogleAuth />
      </div>
    </>
  )
}

export default App
