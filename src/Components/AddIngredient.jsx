import React, { useState, useContext } from 'react';
import { Form, Button, Input, Row, Col } from "reactstrap";
import { ADD_INGREDIENT, DispatchContext } from "../Providers/PizzaProvider";

function AddIngredient() {
    const dispatch = useContext(DispatchContext);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    function dispatchIngredient() {
        let newIngredient = { name: name, category: category }
        dispatch({ type: ADD_INGREDIENT, payload: newIngredient })
        setName('')
    }
    return (
        <Form onSubmit={e =>{e.preventDefault().dispatchIngredient()}}>
            <Row>
                <Col>
                    <Input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                </Col>
                    <Input value={category} onChange={e => setCategory(e.target.value)} type="text" placeholder="Enter category" />
                <Col>
                </Col>
                <Col>
                    <Button onClick={() => dispatchIngredient()}>Add</Button>
                </Col>
            </Row>
        </Form>
    );
}
export default AddIngredient;