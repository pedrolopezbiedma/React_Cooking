import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
