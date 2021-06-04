import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={PokemonList}/>
    </BrowserRouter>
  );
}

export default App;
