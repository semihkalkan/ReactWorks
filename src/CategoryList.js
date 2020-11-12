import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active ={
              category.id === this.props.currentCategory.id
                ? true
                : false
            }
              
              onClick={() => this.props.changeChatagory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
