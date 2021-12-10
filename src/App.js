import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Comments from './components/Comments/Comments';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Section from './components/main/Section';
import Section2 from './components/main/Section2';
import Section3 from './components/main/Section3';
import Section4 from './components/main/Section4';
import Section5 from './components/main/Section5';
import Section6 from './components/main/Section6';
import Section7 from './components/main/Section7';
import Section8 from './components/main/Section8';
function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Section />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Footer />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
