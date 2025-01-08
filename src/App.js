import './App.css';
import Header from './components/Header';
import ParticlesComponent from './components/particles';
import Teams from './Team/Teams';
import { Route, Routes } from 'react-router-dom';
import Home from './Content/Home';
import About from './Content/About';
import Footer from './components/Footer';
import Publications from './Content/Publications';




function App() {
  return (
    <div className="App">
        <ParticlesComponent id='particles'/>
        <div className=''>
        <Header/>
    
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/publications" element={<Publications/>}/>


      

            <Route path="/Team" element={<Teams/>}/>

          </Routes>

        </div>
        <div>
          <Footer/>

        </div>
        

    </div>
  );
}

export default App;
