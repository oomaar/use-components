import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/" componet={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
