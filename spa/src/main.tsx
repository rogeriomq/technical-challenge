import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import './assets/index.css'
import { HomePage } from './pages/HomePage'

console.log(import.meta.env)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HomePage />
)
