import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-gray-100">
        <Header />
        <main className="container mx-auto p-4" style={{ minHeight: "88vh" }}>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={HighScores} path="/high-scores" />
            <Route exact component={GameOver} path="/game-over" />
            <Route exact component={SignUp} path="/sign-up" />
            <Route exact component={SignIn} path="/sign-in" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
