import React, { Component } from "react";
import Menu from "./Components/Menu";
import ProductList from "./Components/ProductList";
import Total from "./Components/Total";
import "./App.css";

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
    // fetch(this.state.url)
    //   .then((answer) => {
    //     return answer.json();
    //   })
    //   .then((answerJson) =>
    //     this.setState({ result: answerJson.items, carregou: true })
    //   );
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
      <div>
        <Menu />
        <ProductList item={items} />
        <Total result={result} loaded={loaded} />
      </div>
    );
  }
}

export default App;
