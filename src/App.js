import './App.css';
import 'antd/dist/antd.css'
import About from './Logu_Profile/About/About';
import Home from './Logu_Profile/Home/Home';
import Navbar from './Logu_Profile/Navbar/Navbar';
import Education from './Logu_Profile/Education_Details/Education';
import Portfolio from './Logu_Profile/Portfolio/Portfolio';
import Contact from './Logu_Profile/Contact/Contact';
import { BackTop} from 'antd';
import { BsFillCapslockFill } from 'react-icons/bs';


function App() {
  return (
    <div className="App">
      <div className='A-left'>
        <Navbar/>
      </div>
      <div className='A-right'>
        <Home/>
        <About/>
        <Education/>
        <Portfolio/>
        <Contact/>
      </div>
      <BackTop>
         <div className="backTop"><BsFillCapslockFill/></div>
      </BackTop>
    </div>
  );
}

export default App;
