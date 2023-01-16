import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ContactsPage from './pages/Contacts/Contacts';
import ProjectsPage from "./pages/Projects/projects";


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    )
}