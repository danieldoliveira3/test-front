import React, { Component } from "react";
import Menu from "./Components/Menu";
import Product from "./Components/Product";
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
        <Product item={items} />

        <h2>
          Total:{" "}
          {loaded ? (
            (result.subTotal - result.discount + result.shippingTotal).toFixed(
              2
            )
          ) : (
            <div>carregando</div>
          )}
        </h2>
        <h2>Desconto: {loaded ? result.discount : <div>carregando</div>}</h2>
        <h2>
          Entrega: {loaded ? result.shippingTotal : <div>carregando</div>}
        </h2>
        <h2>Subtotal: {loaded ? result.subTotal : <div>carregando</div>}</h2>
      </div>
    );
  }
}

export default App;
