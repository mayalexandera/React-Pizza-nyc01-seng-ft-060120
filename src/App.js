import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzasUrl = `http://localhost:3000/pizzas/`

class App extends Component {
  state = {
    pizzas: [],
    pizza: {}
  }

  componentDidMount = () => {
    fetch(pizzasUrl)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ pizzas: data }, () => console.log(this.state.pizzas))
      );
  }

  editHandler = (pizza) => {
    this.setState({pizza: pizza})
  }

  updateHandler = async (updatedPizza, pizzaId) => {

    await fetch(pizzasUrl + pizzaId, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        'accepts': "application/json",
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(resp=> resp.json())
    .then(data => this.updatePizzas(data))
  }

  updatePizzas = (updatedPizza) => {
    let index = updatedPizza.id-1
    this.state.pizzas.splice(index, 1, updatedPizza)
    this.setState({pizzas: this.state.pizzas})
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm updateHandler={this.updateHandler} pizza={this.state.pizza}/>
        <PizzaList editHandler={this.editHandler} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
