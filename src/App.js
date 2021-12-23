
import './App.css';
import HeaderMain from './components/header/HeaderMain';
import HeaderNav from './components/header/HeaderNav';
import Section from './components/main/Section';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      
      <HeaderMain/>
      <Section/>
      <Footer />
      <HeaderNav/>
    </div>
  );
}

export default App;
