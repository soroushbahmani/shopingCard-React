import React, { useReducer, createContext } from 'react'

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}
const cardReduser = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            }
        case "DICREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }

        default:
            return state;
    }
}

export const CardContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cardReduser, initialState);

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}

export default CartContextProvider