import React from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import Bag from "./Pages/Bag";
import Payment from "./Pages/Payment";
import Confirmation from "./Pages/Confirmation";
function Routes(props) {
  const { result, loaded, items } = props;
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/payment" />
      </Route>
      <Route path="/bag">
        <Bag result={result} loaded={loaded} items={items} Link={Link} />
      </Route>

      <Route path="/payment">
        {" "}
        <Payment result={result} loaded={loaded} items={items} Link={Link} />
      </Route>

      <Route path="/confirmation">
        <Confirmation
          result={result}
          loaded={loaded}
          items={items}
          Link={Link}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
