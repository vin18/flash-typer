import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={HighScores} path="/high-scores" />
        <Route exact component={GameOver} path="/game-over" />
      </Switch>
    </Router>
  );
};

export default App;
