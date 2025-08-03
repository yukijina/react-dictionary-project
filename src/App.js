import './App.css';
import logo from './logo.png';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='dictionary logo' className='App-logo' />
        <h1>Dictionary</h1>
      </header>
      <main className='App-main-container'>
        <p className='App-title'>What word do you want to look up?</p>
        <Dictionary />
      </main>
      <hr />
      <footer className='App-footer'>
        <p className='App-footer-text'>
          This project was coded by Yukiji and is open-sourced on{' '}
          <a
            href='https://github.com/yukijina/react-dictionary-project'
            target='_blank'
            rel='noopener noreferrer'
            className='App-footer-link'
          >
            GitHub
          </a>{' '}
          and hosted on{' '}
          <a
            href='https://tourmaline-bunny-react-dictionary.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='App-footer-link'
          >
            Netlify
          </a>{' '}
        </p>
      </footer>
    </div>
  );
}

export default App;
