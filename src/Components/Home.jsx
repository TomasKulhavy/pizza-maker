import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, Button, CardText, Row, Col } from "reactstrap";
import NavLayout from "./NavLayout";

const Home = () => {
  return (
    <>
        <NavLayout />
        <Container>
            <Row className="my-3">
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Order pizza</CardTitle>
                            <CardText>Order your own pizza</CardText>
                            <Link to="/order/pizza" className=" btn btn-success">Order</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Order calzone</CardTitle>
                            <CardText>Order your own calzone</CardText>
                            <Link to="/order/calzone" className=" btn btn-success">Order</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Ingredients</CardTitle>
                            <CardText>Look at our ingredients</CardText>
                            <Link to="/ingredients" className=" btn btn-success">Edit</Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
};
export default Home;