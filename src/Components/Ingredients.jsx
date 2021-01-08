import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import { ListGroup } from "reactstrap";
import NavLayout from "./NavLayout";
import Ingredient from "./Ingredient";

const Ingredients = (value) => {
    const [list, setList] = useState([]);
  
    const addItem = (v) => {
        setList([...list, v])
    }
    return (
        <>
            <NavLayout />
            <p>Ingredients</p>
            <AddIngredient />
            <ListGroup>
                {value.map((item, index) => (<Ingredient index={index} item={item} />))}
            </ListGroup>
        </>
    )
}
export default Ingredients;