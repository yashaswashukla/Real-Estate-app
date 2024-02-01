import './App.css';
import Header from './Component/Header/Header'
import Extra from './Component/Extra/Extra'
import Companies from './Component/Company/Companies';
import Residencies from './Component/Residencies/Residencies';
import Value from './Component/Value/Value'
import Contact from './Component/Contact/Contact';
import GetStarted from './Component/GetStarted/GetStarted';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Extra />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
