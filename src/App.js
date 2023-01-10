
import { BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Contact from './pages/contact';
import Home from './pages/home'
import Projects from './pages/projects';
import Skills from './pages/skills';
function App() {
  return (
   <div>
   <Navbar />
    <div className="container">
      <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/Skills' component={Skills}/>
        <Route path='/Projects' component={Projects}/>
        <Route path='/Contact' component={Contact}/>
      </BrowserRouter>
    </div>
    
   </div>
  );
}

export default App;
