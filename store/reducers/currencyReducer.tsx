
const initialState = {
    money: 10,
    gems: 0,
    prestigePoints: 0,
};

// Action Types
export const SET_CURRENCY = 'SET_CURRENCY';
export const RESET_CURRENCY = 'RESET_CURRENCY';

// Action Creators
export const setCurrency = (currencyType, value) => ({
    type: SET_CURRENCY,
    payload: { currencyType, value },
})

export const resetCurrency = (currencyType) => ({
    type: RESET_CURRENCY,
    payload: { currencyType }
})

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                [action.payload.currencyType]: action.payload.value,
            };
        case RESET_CURRENCY:
            return {
                ...state,
                [action.payload.currencyType]: 0
            }
        default:
            return state;
    }
};

export default currencyReducer;