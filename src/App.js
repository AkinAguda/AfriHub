import "./App.css";
import "tailwindcss/dist/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/homepage/HomePage";
import Register from "./screens/register/Register";
import Signin from "./screens/signin/Signin";
import Journals from "./components/journals/Journals"


function App() {
  return (
    <Router>
      <Switch>
        {/* <div className="w-full"> */}
          {/* Public Routes */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/publications" component={Journals} />
        {/* </div> */}
      </Switch>
    </Router>
  );
}

export default App;
