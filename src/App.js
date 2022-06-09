import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  // PROPS are arguments for components
  return (

    <div className="App">
      <Navbar/>
      <body>
        <Body/>
      </body>

    </div>
  );
}

export default App;
