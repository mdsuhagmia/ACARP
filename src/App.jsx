import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/root/RootLayout'
import Home from './pages/Home'
import Api from './pages/Api'
import Global from './pages/Global'
import Redux from './pages/Redux'
import Props from './pages/Props'


let routering = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/api' element={<Api/>}></Route>
      <Route path='/api/global' element={<Global/>}></Route>
      <Route path='/api/global/redux' element={<Redux/>}></Route>
      <Route path='/api/global/redux/props' element={<Props/>}></Route>
    </Route>
  ))

function App() {
  

  return (
    <>
      <RouterProvider router={routering}></RouterProvider>
    </>
  )
}

export default App
