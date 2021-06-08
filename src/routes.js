import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game/:id" component={Game} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default routes;
