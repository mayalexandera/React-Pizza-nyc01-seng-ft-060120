import React from "react"

const Pizza = (props) => {

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ? <td>is vegetables</td> : <td>meathead</td>}
  <td><button onClick={() => props.updateHandler(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
