import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";
import NavLayout from "./NavLayout";

const Home = () => {
  const history = History();
  return (
    <>
        <NavLayout />
        <Container>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Order pizza</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Order calzone</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Ingredients</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Container>
    </>
  );
};
export default Home;