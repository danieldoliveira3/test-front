import React, { Component } from "react";
import Menu from "./Components/Menu";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";

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
      <Provider store={store}>
        <Router>
          <Menu Link={Link} />
          <Routes result={result} items={items} loaded={loaded} />
        </Router>
      </Provider>
    );
  }
}

export default App;
