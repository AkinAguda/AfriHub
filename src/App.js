import "./App.css";
import "tailwindcss/dist/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/homepage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="w-full">
          {/* Public Routes */}
          <Route exact path="/" component={HomePage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
