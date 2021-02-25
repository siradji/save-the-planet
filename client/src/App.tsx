import * as React from 'react';


import Analytics from './components/Cards/CardsContainer'
import Container from './components/layout/Container';
import Header from './components/layout/header';
import { Hero } from './components/HeroCard';



import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header  title="Green planet" city="London"/>
      <Container>
        <div className="flex flex-col">
            <Hero />        
            <Analytics />
        </div>
      </Container>
    </div>
  );
}


export default App;
