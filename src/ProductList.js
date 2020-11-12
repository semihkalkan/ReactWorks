import React, { Component } from "react";
import { Table } from "reactstrap";
import {Button} from "reactstrap";

class ProductList extends Component {

 

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={() =>this.props.addToCart(product) } color="info">Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;
<h3>Product List</h3>;
