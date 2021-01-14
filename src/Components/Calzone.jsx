import React, { useContext } from "react";
import { IngredientsContext, REMOVE_FROM_ORDER_CALZONE } from "../Providers/IngredientsContext";
import { Table, Jumbotron, Container, Button } from "reactstrap";
import NavLayout from "./NavLayout";

const Calzone = () => {
    const [state, dispatch] = useContext(IngredientsContext);
    console.log(state.currentOrderCalzone);
    return (
        <>
            <NavLayout />
            <Container>
                <Jumbotron className="col-10 my-3">
                    <h3>Objednávka Calzone</h3>
                    <Button className="btn-success my-3" onClick={() => alert("Vaše objednávka byla odeslána!")}>Objednat</Button>
                    <Table>
                        <thead>
                            <tr>
                                <th>Název</th>
                                <th>Kategorie</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.currentOrderCalzone.map(
                                    (item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <Button
                                                className="btn-danger mr-1"
                                                onClick={() =>
                                                    dispatch({
                                                        type: REMOVE_FROM_ORDER_CALZONE,
                                                        index: index
                                                    })}>
                                                X
                                            </Button>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </Jumbotron>
            </Container>
        </>
    )
}
export default Calzone;