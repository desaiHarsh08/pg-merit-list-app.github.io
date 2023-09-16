import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MeritListInfo from './pages/MeritListInfo';
import ErrorNoteForMeritList from './pages/ErrorNoteForMeritList';

function App() {

  
  return (
    <Router basename={"/"}>
      <div className="App h-screen text-white flex justify-center items-center ">

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/merit-list-info' element={<MeritListInfo />} />
          <Route exact path='/error-note-for-merit-list' element={<ErrorNoteForMeritList />} />
        </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
