import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  // PROPS are arguments for components
  return (

    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
