import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart/:id' element={<CardDetails/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
