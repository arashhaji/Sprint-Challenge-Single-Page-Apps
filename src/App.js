import React from "react";
import {Route} from "react-router-dom"
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import Header from './components/Header';
import LocationsList from './components/LocationsList';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
    </main>
  );
}
