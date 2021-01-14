import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const ADD_TO_ORDER_PIZZA = "ADD_TO_ORDER_PIZZA";
export const ADD_TO_ORDER_CALZONE = "ADD_TO_ORDER_CALZONE";
export const REMOVE_FROM_ORDER_PIZZA = "REMOVE_TO_ORDER_PIZZA";
export const REMOVE_FROM_ORDER_CALZONE = "REMOVE_TO_ORDER_CALZONE";

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
    currentOrderPizza: [],
    currentOrderCalzone: [],
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
        case ADD_TO_ORDER_PIZZA: {
            let temp = copyMultidimensionalArray(state);
            let add = true;
            temp.currentOrderPizza.forEach((item) => {
                if (action.category === item.category)
                {
                    add = false;
                    alert("Můžete si vybrat pouze jednu ingredienci z kategorie!")
                }
            })
            if ((temp.currentOrderPizza.length < temp.maxIngredients) & add)
            {
                temp.currentOrderPizza.push({name: action.name, category: action.category});
            }
            else if((temp.currentOrderPizza.length > temp.maxIngredients))
            {
                alert("Můžete si vybrat maximálně 4 ingredience!")
            }
            return temp;
        }
        case ADD_TO_ORDER_CALZONE: {
            let temp = copyMultidimensionalArray(state);
            let add = true;
            temp.currentOrderCalzone.forEach((item) => {
                if (action.category === item.category)
                {
                    add = false;
                    alert("Můžete si vybrat pouze jednu ingredienci z kategorie!")
                }
            })
            if ((temp.currentOrderCalzone.length < temp.maxIngredients) & add)
            {
                temp.currentOrderCalzone.push({name: action.name, category: action.category});
            }
            else if((temp.currentOrderPizza.length > temp.maxIngredients))
            {
                alert("Můžete si vybrat maximálně 4 ingredience!")
            }
            return temp;
        }
        case REMOVE_FROM_ORDER_PIZZA: {
            return {
                ...state,
                currentOrderPizza: [
                    ...state.currentOrderPizza.slice(0, action.index),
                    ...state.currentOrderPizza.slice(action.index + 1),
                ],
            };
        }
        case REMOVE_FROM_ORDER_CALZONE: {
            return {
                ...state,
                currentOrderCalzone: [
                    ...state.currentOrderCalzone.slice(0, action.index),
                    ...state.currentOrderCalzone.slice(action.index + 1),
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
