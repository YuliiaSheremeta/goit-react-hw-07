import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
  </StrictMode>,
);
