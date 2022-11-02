import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App flex flex-col">
      <div className='content flex flex-col w-full items-center py-8 md:py-10 px-4'>
        <div className='main-section flex flex-col items-center py-8 gap-6 w-full max-w-6xl'>
          <Header />
          <MainSection />
        </div>
        <div className='footer-section w-full max-w-5xl border-t pt-8 md:pt-10'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
