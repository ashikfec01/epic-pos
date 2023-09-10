import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({

    getManufacturer: ['params'],
    getManufacturerSuccess: ['data'],
    getManufacturerFailure: ['error'],


}, { prefix: '@Manufacturer/' });

export { Types, Creators };

const initialState = {
    error: false,
    isFetching: false,
    manufacturers: [],
};

export default createReducer(initialState, {
    [Types.GET_MANUFACTURER]: (state, action) => {
        return {
            ...state,
            isFetching: true,
            error: false,
        }
    },
    [Types.GET_MANUFACTURER_SUCCESS]: (state, action) => {
        console.log(action)
        const { data } = action
        return {
            ...state,
            manufacturers: data,
            isFetching: false,
        }
    },
    [Types.GET_MANUFACTURER_FAILURE]: (state, action) => {
        const { error } = action;
        return {
            ...state,
            isFetching: false,
            error: error,
        }
    },
})