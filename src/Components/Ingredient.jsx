import React from 'react';
import { ListGroupItem, Button } from "reactstrap";

const Ingredient = ({item, index}) => (
    <ListGroupItem>
        {item}
        <Button>Remove</Button>
        <Button>Check</Button>
    </ListGroupItem>
)

export default Ingredient;