//tools


//styles
import './App.css';

//components
import Promo from './components/Promo';
import Biography from './components/Biography';
import Social from './components/Social';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Contacs from './components/Contacs';

function App() {
  return (
    <div className="App">
      <Social />
      <Promo />
      <Biography />
      <Experience />
      <Skills />
      {/* <Portfolio />
      <Price />
      <Contacs /> */}
    </div>
  );
}

export default App;
