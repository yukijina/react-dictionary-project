import './App.css';
import logo from './logo.png';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='dictionary logo' className='App-logo' />
        <h1>My Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
