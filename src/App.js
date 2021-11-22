import "./styles/styles.sass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import UserList from "./components/UserList";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <aside className="navbar">
          <NavMenu />
        </aside>
        <main className="main-content">
          <h1 className="main-content--title">Tydzień 6: Szkoła Reacta</h1>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/week7" exact>
              <UserList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
