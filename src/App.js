import React, { Component } from "react";
import Menu from "./Components/Menu";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Bag from "./Pages/Bag";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      items: [],
      loaded: false,

      url: "http://www.mocky.io/v2/5b15c4923100004a006f3c07",
      total: 0,
    };
  }
  const;
  componentDidMount() {
    //fetch api  for getting data
    const { url } = this.state;
    fetch(url)
      .then((answer) => {
        return answer.json();
      })
      .then((answerJson) => {
        return this.setState({
          result: answerJson,
          items: answerJson.items,
          loaded: true,
        });
      });
  }

  render() {
    const { result, items, loaded } = this.state;
    return (
      <Router>
        <Menu Link={Link} />
        <Switch>
          <Route exact="true" path="/">
            <Redirect to="/bag" />
          </Route>
          <Route path="/bag">
            <Bag result={result} loaded={loaded} items={items} Link={Link} />
          </Route>

          <Route path="/payment">
            <div>payment</div>
          </Route>

          <Route path="/confirmation">
            <div>confirmation</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
