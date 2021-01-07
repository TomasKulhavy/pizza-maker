import React from "react";
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button, CardText, Row, Col } from "reactstrap";
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
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Order your own pizza</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Order calzone</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Order your own calzone</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Ingredients</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Look at our ingredients</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
};
export default Home;