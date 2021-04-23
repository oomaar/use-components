import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Sidebar />
      <Switch>
        <Route to="/" componet={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
