import { generatorCosts } from '../../data/generatorData';

const generatorsObject = {
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
    generators: generatorsObject
}

// Action Types
export const SET_GENERATORS = 'SET_GENERATORS';
export const INCREMENT_GENERATORS = 'INCREMENT_GENERATORS';
export const INCREMENT_GENERATOR = 'INCREMENT_GENERATOR';
export const BUY_GENERATOR = 'BUY_GENERATOR';
export const RESET_GENERATORS = 'RESET_GENERATORS';

// Action Creators
export const setGenerators = (updatedGenerators) => ({
    type: SET_GENERATORS,
    payload: { updatedGenerators },
})

export const incrementGenerators = (generatorKeys) => ({
    type: INCREMENT_GENERATORS,
    payload: { generators, generatorKeys },
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

// const updatedGenerators = { ...generators };
//
//     for (let i=0; i < generatorKeys.length; i++) {
//       const currentGeneratorKey = generatorKeys[i]
//       const previousGeneratorKey = generatorKeys[i - 1];
//       const currentGenerator = updatedGenerators[currentGeneratorKey];
//       const previousGenerator = updatedGenerators[previousGeneratorKey];
//
//       if (currentGenerator.totalQuantity > 0) {
//         if (currentGeneratorKey === 'generatorOne') {
//           dispatch(setCurrency('money', money + currentGenerator.totalQuantity))
//         } else if (currentGeneratorKey === 'generatorTwo') {
//           dispatch(incrementGenerator(previousGeneratorKey, currentGenerator.totalQuantity + currentGenerator.totalQuantity))
//         }
//
//       }
//     }
//     setGenerators(updatedGenerators);

const generatorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENERATORS:
            return {
                generators: action.payload.updatedGenerators
            }
        case INCREMENT_GENERATORS:
            const updatedGenerators = action.payload.generators

            for (let i=1; i < action.payload.generatorKeys.length; i++) {
                const currentGeneratorKey = action.payload.generatorKeys[i]
                const previousGeneratorKey = action.payload.generatorKeys[i - 1];
                const currentGenerator = updatedGenerators[currentGeneratorKey];
                const previousGenerator = updatedGenerators[previousGeneratorKey];

                if (currentGenerator.totalQuantity > 0) {
                    previousGenerator.totalQuantity += currentGenerator.totalQuantity
                }
            }
            return {
                generators: updatedGenerators
            };
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
            const updatedGeneratorKey = action.payload.generatorKey;
            const updatedGeneratorAmount = action.payload.amount;
            const updatedGeneratorState = {
                ...state.generators,
                [updatedGeneratorKey]: {
                    ...state.generators[updatedGeneratorKey],
                    purchasedQuantity: state.generators[updatedGeneratorKey].purchasedQuantity + updatedGeneratorAmount,
                    totalQuantity: state.generators[updatedGeneratorKey].totalQuantity + updatedGeneratorAmount,
                }
            }
            return {
                ...state,
                generators: updatedGeneratorState
            };
        case RESET_GENERATORS:
            return initialState;
        default:
            return state;
    }
};

export default generatorsReducer;