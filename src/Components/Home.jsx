import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
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
                            <CardTitle tag="h5">Objednej si pizzu</CardTitle>
                            <CardText>Objednej si vlastní pizzu</CardText>
                            <Link to="/order/pizza" className=" btn btn-success">Objednat</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Objednej si calzone</CardTitle>
                            <CardText>Objednej si vlastní calzone</CardText>
                            <Link to="/order/calzone" className=" btn btn-success">Objednat</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Ingredience</CardTitle>
                            <CardText>Podívejte se na naše ingerience</CardText>
                            <Link to="/ingredients" className=" btn btn-success">Upravit/Přidat</Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
};
export default Home;