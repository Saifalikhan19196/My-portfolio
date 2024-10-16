import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Login from './components/Login/Login'
import Resume from './components/Resume/Resume'
import Signup from './components/SignUp/signup'

import PasswordGenerator from './Project/PasswordGenerator'
import Counter from './Project/counterapp'


/*const router = createBrowserRouter([

  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])*/
const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:userid' element={<User />} />
            <Route
                loader={githubInfoLoader}
                path='github' element={<Github />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup/>} />

            <Route path='resume' element={<Resume />} />
            <Route path='password-generator' element={<PasswordGenerator />} />
            <Route path='counter' element={<Counter />}/>
        </Route>

    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,

)
