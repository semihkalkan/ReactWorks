import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title = "CategoryList" />
          </Col>
          <Col xs="9">
            <ProductList title = "ProductList"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
