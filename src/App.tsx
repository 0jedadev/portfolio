import Global from './styles/global'
import HomePage from './pages/Home/home'
import ProjectsPage from './pages/Projects/projects'
import AboutPage from './pages/About/about'
import ContactsPage from './pages/Contacts/Contacts'
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { AppRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <Global />
      <AppRoutes />
    </div>
  )
}

export default App
