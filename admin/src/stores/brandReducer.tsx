import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({

    getBrands: ['params'],
    getBrandsSuccess: ['data'],
    getBrandsFailure: ['error'],

    addBrand: ['payload'],
    addBrandSuccess: ['response'],
    addBrandFailure: ['error'],


}, { prefix: '@Brand/' });

export { Types, Creators };

const initialState = {
    error: false,
    isFetching: false,
    brands: [],
};

export default createReducer(initialState, {
    [Types.ADD_BRAND]: (state, action) => {
        return {
            ...state,
            isFetching: true,
            error: false,
        }
    },
    [Types.ADD_BRAND_SUCCESS]: (state, action) => {
        return {
            ...state,
            isFetching: false,
            error: false,
        }
    },
    [Types.ADD_BRAND_FAILURE]: (state, action) => {
        return {
            ...state,
            isFetching: false,
            error: false,
        }
    },

    [Types.GET_BRANDS]: (state, action) => {
        return {
            ...state,
            isFetching: true,
            error: false,
        }
    },
    [Types.GET_BRANDS_SUCCESS]: (state, action) => {
        console.log(action)
        const { data } = action
        return {
            ...state,
            brands: data,
            isFetching: false,
        }
    },
    [Types.GET_BRANDS_FAILURE]: (state, action) => {
        const { error } = action;
        return {
            ...state,
            isFetching: false,
            error: error,
        }
    },
})