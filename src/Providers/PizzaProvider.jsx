import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export const ingredientsList = {
    ingredients: [
        { name: "pork cut", category: "meat" },
        { name: "eidam", category: "cheese" },
        { name: "tomato", category: "vegetables" }
    ],
    order: {
        type: 'Calzone',
        checkedIngredients: []
    }
};

export const StateContext = createContext();
export const DispatchContext = createContext();

export const ingredientsReducer = (state, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state, 
                ingredients: [
                    ...state.ingredients,
                    { name: action.name, category: action.category },
                ],
            };
        }
        
    }
}

export const PizzaContext = createContext(ingredientsList);

export const PizzaProvider = ({ children, ...rest }) => {
  const [state, dispatch] = useReducer(ingredientsReducer, ingredientsList);
  return (
    <>
        <PizzaContext.Provider value={[state, dispatch]}>
            {children}
        </PizzaContext.Provider>
    </>
  );
};
