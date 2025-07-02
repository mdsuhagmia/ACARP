import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextApi } from './components/ContextApi.jsx';
import store from './store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
 <StrictMode>
  <Provider store={store}>
   <ContextApi>
     <App />
   </ContextApi>
  </Provider>
 </StrictMode>,
)
