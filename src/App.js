import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App flex flex-col">
      <div className='content flex flex-col w-full items-center py-8 md:py-10 px-4'>
        <div className='main-section flex flex-col items-center w-full max-w-6xl'>
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
