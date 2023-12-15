import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Leetcode from './components/Leetcode/Leetcode.jsx'

// Creating router
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>

//       },
//       {
//         path:"contact",
//         element:<Contact/>

//       }
//     ]
//   }
// ])

// Another ,method of creating routes
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route 
      path='about' 
      element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='user/:userId' element={<User />} />        {/*:{userId} ka access mil jata hai component me */}
      <Route
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />        {/*:{userId} ka access mil jata hai component me */}

      <Route path='blogs' element={<Blogs />} />
      <Route
      path='leetcode'
      element={<Leetcode />} />

    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>   {/*  ReactProvider requires a props */}
  </React.StrictMode>,
)
