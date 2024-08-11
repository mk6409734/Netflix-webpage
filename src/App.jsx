import Header from './Components/header';
import Tvsection from './Components/Tvsection';
import Mobile from './Components/mobile';
import Devices from './Components/devices';
import Kids from './Components/kids';
import Question from './Components/question';
import './App.css';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tvsection/>
      <Mobile/>
      <Devices/>
      <Kids/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
