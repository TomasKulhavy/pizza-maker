import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const copyMultidimensionalArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));
};

const ingredientsList = {
    ingredients: [
        { name: "Slanina", category: "Maso" },
        { name: "Eidam", category: "Sýr" },
        { name: "Rajčata", category: "Zelenina" },
        { name: "Šunka", category: "Maso" }
    ],
    maxIngredients: 4,
}

export const IngredientsContext = createContext(ingredientsList);

export const ingredientsReducer = (state, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            let temp = copyMultidimensionalArray(state);
            if (action.name !== "" && action.category !== "")
            {
                temp.ingredients.push({name: action.name, category: action.category});
            }
            return temp;
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.slice(0, action.index),
                    ...state.ingredients.slice(action.index + 1),
                ],
            };
        }
        default: return state;
    }
}

export const IngredientsProvider = ({ children, ...rest }) => {
  const [state, dispatch] = useReducer(ingredientsReducer, ingredientsList);
  return (
    <>
        <IngredientsContext.Provider value={[state, dispatch]}>
            {children}
        </IngredientsContext.Provider>
    </>
  )
}
