import "./style.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;