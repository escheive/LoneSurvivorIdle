import { generatorCosts } from '../../data/generatorData';

const generators = {
    generatorOne: {
        name: 'Generator 1',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorTwo: {
        name: 'Generator 2',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorThree: {
        name: 'Generator 3',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorFour: {
        name: 'Generator 4',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorFive: {
        name: 'Generator 5',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorSix: {
        name: 'Generator 6',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorSeven: {
        name: 'Generator 7',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorEight: {
        name: 'Generator 8',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorNine: {
        name: 'Generator 9',
        totalQuantity: 0,
        purchasedQuantity: 0,
    },
    generatorTen: {
        name: 'Generator 10',
        totalQuantity: 0,
        purchasedQuantity: 0,
    }
}

const initialState = {
    generators
};

// Action Types
export const SET_GENERATORS = 'SET_GENERATORS';
export const INCREMENT_GENERATOR = 'INCREMENT_GENERATOR';
export const BUY_GENERATOR = 'BUY_GENERATOR';
export const RESET_GENERATORS = 'RESET_GENERATORS';

// Action Creators
export const setGenerators = (updatedGenerators) => ({
    type: SET_GENERATORS,
    payload: { updatedGenerators },
})

export const incrementGenerator = (generatorKey, amount) => ({
    type: INCREMENT_GENERATOR,
    payload: { generatorKey, amount },
})

export const buyGenerator = (generatorKey, amount) => ({
    type: BUY_GENERATOR,
    payload: { generatorKey, amount },
})

export const resetGenerators = () => ({
    type: RESET_GENERATORS
})

const generatorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENERATORS:
            return action.payload.updatedGenerators;
        case INCREMENT_GENERATOR:
            const generatorKey = action.payload.generatorKey;
            return {
                ...state,
                [action.payload.generatorKey]: {
                    ...state[generatorKey],
                    totalQuantity: state[generatorKey].totalQuantity + action.payload.amount,
                }
            };
        case BUY_GENERATOR:
            return {
                ...state,
                [action.payload.generatorKey]: {
                    ...state[action.payload.generatorKey],
                    purchasedQuantity: state[action.payload.generatorKey].purchasedQuantity + action.payload.amount,
                    totalQuantity: state[action.payload.generatorKey].totalQuantity + action.payload.amount,
                }
            };
        case RESET_GENERATORS:
            const resetState = {};
            for (const key in generators) {
                if (generators.hasOwnProperty(key)) {
                    resetState[key] = {
                        ...generators[key]
                    };
                }
            }
            return resetState;
        default:
            return state;
    }
};

export default generatorsReducer;